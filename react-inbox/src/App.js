import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import Compose from './components/Compose';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Compose />
      </div>
    );
  }
}

export default App;
