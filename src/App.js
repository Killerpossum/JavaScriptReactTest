import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shepard from './Shepard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Normandy</h1>
        </header>
        <Shepard />
      </div>
    );
  }
}

export default App;
