import React, { Component } from "react";

class Preview extends Component {
  render() {
    const { currentImg } = this.props;
    return (
      <div class="preview">
        <img src={currentImg} />
      </div>
    );
  }
}

export default Preview;
