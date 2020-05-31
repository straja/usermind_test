import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import "./ChooseDate.css"
 
class ChooseDate extends React.Component {
  state = {
    startDate: this.props.date
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
    this.props.changed();
  };

  render() {
    return (
      <div className="date">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ChooseDate;