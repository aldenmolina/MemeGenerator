import React, { Component } from "react";
import "./CSS/ThumbnailPicker.css";

class ThumbnailPicker extends Component {
  render() {
    const { thumbnails } = this.props;
    const thumbnailItems = thumbnails.map(item => <img src={item} />);

    return <div class="thumbnail-items">{thumbnailItems}</div>;
  }
}

export default ThumbnailPicker;
