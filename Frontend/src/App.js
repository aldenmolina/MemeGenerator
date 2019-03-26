import React, { Component } from "react";
import domtoimage from "dom-to-image";
import ThumbnailPicker from "./ThumbnailPicker";
import InputText from "./InputText";
import Preview from "./Preview";
import TextStyle from "./TextStyle";
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
      bottomText: "Hello",
      fontSize: 38
    };
  }
  increaseFontSize = () => {
    const newFontSize = this.state.fontSize + 2;
    this.setState({ fontSize: newFontSize });
  };
  decreaseFontSize = () => {
    const newFontSize = this.state.fontSize - 2;
    this.setState({ fontSize: newFontSize });
  };
  setImage = thumbnailIndex => {
    this.setState({ currentImg: thumbnailIndex });
  };
  setTopText = text => {
    this.setState({ topText: text });
  };
  setBottomText = text => {
    this.setState({ bottomText: text });
  };

  SaveImage = () => {
    const element = document.querySelector(".preview-container");

    domtoimage
      .toPng(element)
      .then(function(dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function(error) {
        console.error("oops, something went wrong!", error);
      });
  };

  render() {
    return (
      <div className="container">
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
            fontSize={this.state.fontSize}
            botFontSize={this.state.fontSize}
          />
          <div>
            <InputText
              topText={this.state.topText}
              bottomText={this.state.bottomText}
              setTopText={this.setTopText}
              setBottomText={this.setBottomText}
            />
            <TextStyle
              increaseFontSize={this.increaseFontSize}
              decreaseFontSize={this.decreaseFontSize}
            />
            <button onClick={this.SaveImage}>Save Image</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
