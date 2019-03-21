import React, { Component } from "react";

class Preview extends Component {
  render() {
    const { currentImg, topText, bottomText } = this.props;
    console.log(currentImg);
    return (
      <div className="preview-container">
        <span className="top-text">{topText}</span>
        <img className="preview-img" src={currentImg} />
        <span className="bottom-text">{bottomText}</span>
      </div>

      // <div className="preview-image" style={{backgroundImage: `url(${currentImg})`}}>
      // <span>{topText}</span>
      // <span>{bottomText}</span>
      // </div>
    );
  }
}

export default Preview;
