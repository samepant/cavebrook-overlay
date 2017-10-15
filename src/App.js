import React, { Component } from 'react'
import './App.css'
import MealTicker from './mealTicker'
import WeatherTime from './weatherTime'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MealTicker />
        <WeatherTime />
      </div>
    );
  }
}

export default App
