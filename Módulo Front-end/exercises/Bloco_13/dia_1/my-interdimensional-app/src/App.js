import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Characters />
      </div>
    );
  }
}
