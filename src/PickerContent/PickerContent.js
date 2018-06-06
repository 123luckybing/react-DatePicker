import React ,{ Component } from 'react';
import './PickerContent.css';
class PickerContent extends Component {
  constructor() {
    super();
    this.selectDate = this.selectDate.bind(this);
  }
  selectDate (e) {
    this.props.selectDate(e.target.innerHTML);
    this.props.slideUp();
  }
  render() {
    let arr = this.props.wholeDay.map((elem, index) => {
      return (
        <div className="each-day" key={index} onClick = {this.selectDate}>
          {elem}
        </div>
      );
    });
    return(
      <div className="dateContent">
        <div className="week">
          <div>日</div>
          <div>一</div>
          <div>二</div>
          <div>三</div>
          <div>四</div>
          <div>五</div>
          <div>六</div>
        </div>
        <div>{arr}</div>
      </div> 
    );
  }
}
export default PickerContent;