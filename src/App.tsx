import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let myString: string = "wisldkfhs"
  let myNumber: number = 548

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value of {myString} has type {typeof myString}.
        </p>
        <p>
        The value of {myNumber} has type {typeof myNumber}.
        </p>
      </header>
    </div>
  );
}

export default App;
