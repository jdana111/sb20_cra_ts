import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let myVar: any = 3;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value of 'myVar' = {myVar} and the type is {typeof myVar}.
        </p>
        <p></p>
      </header>
    </div>
  );
}

export default App;
