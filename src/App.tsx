import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let myArray1: number[] = [1, 2, 3];
  let myArray2: Array<number> = [1, 2, 3]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        The value of {myArray1} has type {typeof myArray1}.
        </p>
        <p>
        The value of {myArray2} has type {typeof myArray2}.
        </p>
      </header>
    </div>
  );
}

export default App;
