import React from "react";
import Message from './Message';
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message message="Message from App.tsx" />
      </header>
    </div>
  );
}

export default App;
