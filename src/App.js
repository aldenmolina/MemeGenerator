import React, { Component } from "react";
import ThumbnailPicker from "./ThumbnailPicker";
import Preview from "./Preview";
import "./CSS/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      thumbnails: [
        "/Images/Batman.jpg",
        "/Images/Spiderman.jpg",
        "/Images/Ancient-Aliens.jpg",
        "/Images/Bad-Luck-Brian.jpg"
      ],
      currentImg: "/Images/Batman.jpg"
    };
  }
  setImage = thumbnailIndex => {
    this.setState({ currentImg: thumbnailIndex });
  };
  render() {
    return (
      <div class="container">
        <header>Meme Generator</header>
        <main>
          <ThumbnailPicker
            thumbnails={this.state.thumbnails}
            setImage={this.setImage}
          />
          <Preview
            thumbnails={this.state.thumbnails}
            currentImg={this.state.currentImg}
          />
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
