import React, { Component } from "react";
import ThumbnailPicker from "./ThumbnailPicker";
import InputText from "./InputText";
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
      currentImg: "/Images/Batman.jpg",
      topText: "Goodbye",
      bottomText: "Hello"
    };
  }
  setImage = thumbnailIndex => {
    this.setState({ currentImg: thumbnailIndex });
  };
  setTopText = text => {
    this.setState({ topText: text });
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
            topText={this.state.topText}
            bottomText={this.state.bottomText}
          />
          <InputText
            topText={this.state.topText}
            bottomText={this.state.bottomText}
            setTopText={this.setTopText}
          />
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
