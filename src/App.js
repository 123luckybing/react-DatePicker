import React, { Component } from 'react';
import Input from './Input/Input';
import DatePicker from './DatePicker/DatePicker';
class App extends Component {
  constructor() {
    super();
    this.state = {
      height: false,
      date: '',
      year:'',
      month:'',
    }
    this.focus = this.focus.bind(this);
    this.date = this.date.bind(this);
    this.slideUp = this.slideUp.bind(this);
  }
  slideUp() {
    this.setState({
      height: false,
    });
  }
  // 当input 获取焦点时,下方日历高度展开
  focus () {
    this.setState({
      height: true,
    });
  }
  date (date,year,month) {
    this.setState({
      date,
      year,
      month,
    })
  }
  render() {
    return (
      <div style={{marginTop:"20px",marginLeft:"20px"}}>
        <Input focus = {this.focus} 
        date = {this.state.date}
        year = {this.state.year}
        month = {this.state.month}
        />
        <DatePicker 
        height = {this.state.height} 
        selectDate = {this.date}
        slideUp = {this.slideUp}
        />
      </div>
    );
  }
}

export default App;
