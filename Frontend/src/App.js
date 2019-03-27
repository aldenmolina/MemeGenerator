import React, { Component } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import ThumbnailPicker from "./ThumbnailPicker";
import InputText from "./InputText";
import Preview from "./Preview";
import TextStyle from "./TextStyle";
import CreatedMemes from "./CreatedMemes";
import "./CSS/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      thumbnails: [
        "/Images/Batman.jpg",
        "/Images/Spiderman.jpg",
        "/Images/Ancient-Aliens.jpg",
        "/Images/Bad-Luck-Brian.jpg",
        "/Images/shaq.gif"
      ],
      currentImg: "/Images/Batman.jpg",
      topText: "Goodbye",
      bottomText: "Hello",
      fontSize: 38,
      createdMemes: [{}]
    };
  }

  componentDidMount() {
    fetch("https://localhost:44396/api/meme")
      .then(res => res.json())
      .then(json => this.setState({ createdMemes: json }));
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

  CreateImage = () => {
    const element = document.querySelector(".preview-container");

    domtoimage
      .toPng(element)
      .then(function(dataUrl) {
        console.log(dataUrl);
      })
      .catch(function(error) {
        console.error("Oops!", error);
      });
  };

  DownloadImage = () => {
    const element = document.querySelector(".preview-container");

    domtoimage
      .toBlob(element)
      .then(function(blob) {
        window.saveAs(blob, "meme.png");
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
            <button onClick={this.CreateImage}>Create Image</button>
            <button onClick={this.DownloadImage}>Download Image</button>
          </div>
        </main>
        <CreatedMemes createdMemes={this.state.createdMemes} />
      </div>
    );
  }
}

export default App;
