import React, { Component } from 'react';
import './input.css';
class Input extends Component {
  constructor () {
    super();
    this.focus = this.focus.bind(this);
  }
  focus () {
    this.props.focus();
  }
  render() {
    const date = this.props.year + '-' + this.props.month + '-' + this.props.date;
    return(
      <input 
      type="search"
      placeholder = {this.props.month ? date : "Please choose date" }
      onFocus = {this.focus}
      />
    )
  }
}
export default Input;