import React, { Component } from "react";
import { once } from "cluster";

class Preview extends Component {
  constructor() {
    super();
    this.state = {
      isTopDragging: false,
      isBottomDragging: false,
      topTextTop: 0,
      topTextLeft: 0,
      bottomTextBottom: 0,
      bottomTextLeft: 0,
      listener: true,
      bottomListener: true
    };
  }

  onMouseDown = e => {
    this.setState({ isTopDragging: true });
    if(this.state.listener == true){
      document.addEventListener("mousemove", e => this.onMouseMove(e), this.setState({listener: false}));
    }
  };

  onMouseUp = e => {
    this.setState({ isTopDragging: false });
  };

  onMouseMove = e => {
    if (!this.state.isTopDragging) return;
    const newTopTextLeft = this.state.topTextLeft + e.movementX;
    const newTopTextTop = this.state.topTextTop + e.movementY;
    this.setState({ topTextLeft: newTopTextLeft, topTextTop: newTopTextTop });
  };

  onMouseDownBottom = e => {
    this.setState({ isBottomDragging: true });
    if(this.state.bottomListener == true){
      document.addEventListener("mousemove", e => this.onMouseMoveBottom(e), this.setState({bottomListener: false}));
    }
  };

  onMouseUpBottom = e => {
    console.count();
    document.removeEventListener("mousemove", e => this.onMouseMoveBottom(e));
    this.setState({ isBottomDragging: false });
  };

  onMouseMoveBottom = e => {
    if (!this.state.isBottomDragging) return;
    const newBottomTextLeft = this.state.bottomTextLeft + e.movementX;
    const newBottomTextBottom = this.state.bottomTextBottom - e.movementY;
    this.setState({ bottomTextLeft: newBottomTextLeft, bottomTextBottom: newBottomTextBottom });
  };

  render() {
    const { currentImg, topText, bottomText, fontSize } = this.props;

    return (
      <div className="preview-container">
        <span
          className="top-text"
          style={{
            left: this.state.topTextLeft,
            top: this.state.topTextTop,
            fontSize
          }}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
        >
          {topText}
        </span>
        <img className="preview-img" src={currentImg} />
        <span className="bottom-text" style={{ left: this.state.bottomTextLeft, bottom: this.state.bottomTextBottom, fontSize }} onMouseDown={this.onMouseDownBottom} onMouseUp={this.onMouseUpBottom}>
          {bottomText}
        </span>
      </div>

      // <div className="preview-image" style={{backgroundImage: `url(${currentImg})`}}>
      // <span>{topText}</span>
      // <span>{bottomText}</span>
      // </div>
    );
  }
}

export default Preview;
