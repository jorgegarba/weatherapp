import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation city={"Arequipa, PE"}/>
        <WeatherLocation city={"Pucallpa, PE"}/>
        <WeatherLocation city={"Puno, PE"}/>
        <WeatherLocation city={"Lima, PE"}/>

      </div>
    );
  }
}

export default App;
