import React, { Component } from "react";

class InputText extends Component {
  onTextChange = e => {
    this.props.setTopText(e.target.value);
  };
  render() {
    const { topText, bottomText } = this.props;
    return (
      <>
        <label>
          Text:
          <input type="text" value={topText} onChange={this.onTextChange} />
        </label>
      </>
    );
  }
}
export default InputText;
