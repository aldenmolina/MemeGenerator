import React, { Component } from "react";

class InputText extends Component {
  onTopTextChange = e => {
    this.props.setTopText(e.target.value);
  };
  onBottomTextChange = e => {
    this.props.setBottomText(e.target.value);
  };
  render() {
    const { topText, bottomText } = this.props;
    return (
      <div className="text-field">
          <input 
            type="text" 
            value={topText} 
            onChange={this.onTopTextChange}
          />
          <input
            type="text"
            value={bottomText}
            onChange={this.onBottomTextChange}
          />
      </div>
    );
  }
}
export default InputText;
