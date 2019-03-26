import React, { Component } from "react";

class TextStyle extends Component {
  render() {
    const { increaseFontSize, decreaseFontSize } = this.props;
    return (
      <div>
        <button onClick={increaseFontSize}>Increase Font Size</button>
        <button onClick={decreaseFontSize}>Decrease Font Size</button>
      </div>
    );
  }
}

export default TextStyle;
