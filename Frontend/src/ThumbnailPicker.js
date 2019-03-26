import React, { Component } from "react";
import "./CSS/ThumbnailPicker.css";

class ThumbnailPicker extends Component {
  setPreview = e => {
    this.props.setImage(e.target.src);
  };
  render() {
    const { thumbnails } = this.props;
    const thumbnailItems = thumbnails.map(item => (
      <img src={item} onClick={this.setPreview} key={item} />
    ));

    return <div className="thumbnail-items">{thumbnailItems}</div>;
  }
}

export default ThumbnailPicker;
