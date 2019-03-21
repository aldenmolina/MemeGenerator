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
      <>
        <label>
          Text:
          <input type="text" value={topText} onChange={this.onTopTextChange} />
          <input
            type="text"
            value={bottomText}
            onChange={this.onBottomTextChange}
          />
        </label>
      </>
    );
  }
}
export default InputText;
