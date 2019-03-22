import React, { Component } from "react";

class Preview extends Component {
  constructor(){
    super();
    this.state = {
      isTopDragging: false,
      isBottomDragging: false,
      topTextTop: 0,
      topTextLeft: 0,
      bottomTextTop: 0,
      bottomTextLeft: 0
    }
  }

  onMouseDown = e => {
    this.setState({isTopDragging: true});
    document.addEventListener('mousemove', (e) => this.onMouseMove(e));
  }

  onMouseUp = e => {
    console.count();
    document.removeEventListener('mousemove', (e) => this.onMouseMove);
    this.setState({isTopDragging: false});
  }

  onMouseMove = e => {
    if (!this.state.isTopDragging) return;
    const newTopTextLeft = this.state.topTextLeft + e.movementX;
    const newTopTextTop = this.state.topTextTop + e.movementY;
    this.setState({topTextLeft: newTopTextLeft, topTextTop: newTopTextTop});
  }

  render() {
    const { currentImg, topText, bottomText, fontSize } = this.props;

    return (
      <div className="preview-container">
        <span className="top-text" style={{left: this.state.topTextLeft, top: this.state.topTextTop, fontSize}} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>{topText}</span>
        <img className="preview-img" src={currentImg} />
        <span className="bottom-text" style={{ fontSize }}>
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
