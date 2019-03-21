import React, { Component } from "react";

class Preview extends Component {
  render() {
    const { currentImg, topText, bottomText } = this.props;
    return (
      <div class="preview">
        <span>{topText}</span>
        <img src={currentImg} />
        <span>{bottomText}</span>
      </div>
    );
  }
}

export default Preview;
