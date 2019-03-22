import React, { Component } from "react";

class Preview extends Component {
  constructor(){
    super();
    this.state = {
      isTopDragging: false,
      isBottomDragging: false,
      topTop: 0,
      topLeft: 0,
      bottomTop: 0,
      bottomLeft: 0
    }
  }

  onMouseDown = e => {
    this.setState({isTopDragging: true});
  }

  onMouseUp = e => {
    this.setState({isTopDragging: false});
  }

  onMouseMove = e => {
    if (this.state.isTopDragging){
      console.log(e);
      const newTopLeft = this.state.topLeft + e.movementX;
      const newTopTop = this.state.topTop + e.movementY;
      this.setState({topLeft: newTopLeft, topTop: newTopTop});
    }
  }

  render() {
    const { currentImg, topText, bottomText } = this.props;

    return (
      <div className="preview-container">
        <span className="top-text" style={{left: this.state.topLeft, top: this.state.topTop}} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}>{topText}</span>
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
