import React, { Component } from 'react';
import './PickerTitle.css';
class  PickerTitle extends Component {
  constructor () {
    super();
    this.monthAdd = this.monthAdd.bind(this);
    this.monthReduce = this.monthReduce.bind(this);
    this.yearAdd = this.yearAdd.bind(this);
    this.yearReduce = this.yearReduce.bind(this);
  }
  monthAdd () {
    this.props.monthAdd();
  }
  monthReduce (){
    this.props.monthReduce();
  }
  yearAdd() {
    this.props.yearAdd();
  }
  yearReduce() {
    this.props.yearReduce();
  }
  render() {
    return(
      <div className="title">
         <div className="double-left" 
         onClick = {this.yearReduce}
         >&lt;&lt;</div>
         <div className="single-left" 
         onClick = {this.monthReduce}
         >&lt;</div>
         <p className="date">
           {this.props.year} - {this.props.month}
         </p>
         <div className="single-right" 
         onClick={this.monthAdd}
         >&gt;</div>
         <div className="double-right" 
         onClick = {this.yearAdd}
         >&gt;&gt;</div>
      </div>
    )
  }
}
export default PickerTitle;