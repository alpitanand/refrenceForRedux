import React, { Component } from 'react';
import './App.css';
import RouteLearn from '../src/Container/Routelearn'
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <RouteLearn/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
