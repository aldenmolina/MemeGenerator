import React, { Component } from "react";

class CreatedMemes extends Component {
  render() {
    const { createdMemes } = this.props;
    const memesList = createdMemes.map(item => (
      <div className="created-meme">
        <span
          style={{
            top: item.topTextY,
            left: item.topTextX,
            fontSize: item.fontSize
          }}
        >
          {item.topText}
        </span>
        <img src={item.imagePath} />
        <span
          style={{
            bottom: item.bottomTextY,
            left: item.bottomTextX,
            fontSize: item.fontSize
          }}
        >
          {item.bottomText}
        </span>
      </div>
    ));
    return <div className="created-memes">{memesList}</div>;
  }
}

export default CreatedMemes;
