import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  enum FontColor {
    Navy = '#000080',
    Red = '	#FF0000',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: FontColor.Navy}}>
          The value of 'FontColor.Navy' {FontColor.Navy}.
        </p>
        <p></p>
      </header>
    </div>
  );
}

export default App;
