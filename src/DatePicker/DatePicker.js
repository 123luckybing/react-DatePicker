import React, { Component } from 'react';
import PickerTitle from '../PickerTitle/PickerTitle';
import PickerContent from '../PickerContent/PickerContent';
import './DatePicker.css';
class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    }
    this.monthAdd = this.monthAdd.bind(this);
    this.monthReduce = this.monthReduce.bind(this);
    this.yearAdd = this.yearAdd.bind(this);
    this.yearReduce = this.yearReduce.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.slideUp = this.slideUp.bind(this);
  }
  slideUp() {
    this.props.slideUp();
  }
   // 将用户选择的日期传入input标签里～
  changeDate (date) {
    this.props.selectDate(date,this.state.year,this.state.month);
  }
  // 月份加一
  monthAdd () {
    if(this.state.month === 12) {
      this.setState({
        month: 1,
        year: this.state.year + 1,
      });
    } else {
    this.setState({
      month: this.state.month + 1,
    });
   }
  }

  // 月份减一
  monthReduce () {
    if(this.state.month === 1) {
      this.setState({
        month: 12,
        year: this.state.year - 1,
      });
    } else {
      this.setState({
        month: this.state.month - 1,
      });
    }
  }

  // 年份加一
  yearAdd () {
    this.setState({
      year: this.state.year + 1,
    });
  }
  
  // 年份减一
  yearReduce () {
    this.setState({
      year: this.state.year - 1,
    });
  }

  render() {
    let monthDay;
    let nextMonthDay;
    let preMonthDay;
    let wholeDay;
    let preDayDetail=[];
    let nextMonthDetail=[];
    let nowDay=[];
    let preArr = [];
    const YearDay = (year) => {
       // 定义一下每年每个月的天数
      monthDay = [31,29,31,30,31,30,31,31,30,31,30,31];
      // 如果闰年是28天
      if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        monthDay[1] = 28;
      }
      // 定义一下每个月需要上个月来补足的天数, 
      // 一个数组12项～第几项就是第几个月需要上个月
      preMonthDay = new Array(12).fill(null).map((elem,index) => {
        let dayPre = new Date(year,index,1).getDay(); // 每一月1号星期几,就补几天
        return dayPre;
      });
      // 定义下个月需要补齐的天数
      nextMonthDay = new Array(12).fill(null).map((elem,index) => {
        let dayNext = 42 - monthDay[index] - preMonthDay[index];
        return dayNext;
      });
      // 根据天数补全每个月需要展示的页面
      // 上个月的数组(有一个问题，当this.state.month为1时,monthDay[this.state.month-2]为monthDay[-1],会有问题,12月永远31天
     // 在这里做一下判断)
      if(this.state.month === 1) {
        for(let i =1;i <= 31; i ++) {
          preArr.push(<div className="nextDay">{i}</div>);
        }
      preDayDetail = preArr.slice(31 - preMonthDay[this.state.month - 1]);
      } else {
      for(let i =1;i <= monthDay[this.state.month-2]; i ++) {
        preArr.push(<div className="nextDay">{i}</div>);
      }
      preDayDetail = preArr.slice(monthDay[this.state.month-2] - preMonthDay[this.state.month - 1]);            
    }
  
      // (2)本月的日期
      for (let i = 1; i<= monthDay[this.state.month -1]; i++ ) {
        nowDay.push(<div>{i}</div>);
      }
      
      // (3) 下个月补齐的日期
      for(let i =1 ;i <= nextMonthDay[this.state.month -1] ;i++) {
        nextMonthDetail.push(<div className="nextDay">{i}</div>);
      }
      wholeDay = [...preDayDetail, ...nowDay, ...nextMonthDetail];
    }  
    YearDay(this.state.year);
    return(
      <div className="date-picker" 
      style={this.props.height ? { height: '230px' } : { height: '0'}}>
        <PickerTitle 
          year ={this.state.year} 
          month = {this.state.month} 
          day = {this.state.day}
          monthAdd = {this.monthAdd}
          monthReduce = {this.monthReduce}
          yearAdd = {this.yearAdd}
          yearReduce = {this.yearReduce}
        />
        <PickerContent 
         wholeDay = {wholeDay}
         slideUp = {this.slideUp}
         selectDate = {this.changeDate}
        />
      </div>
    )
  }
}
export default Datepicker;