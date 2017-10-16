import React, { Component } from 'react'
import './App.css'
import MealTicker from './mealTicker'
import WeatherTime from './weatherTime'
import HeartBeat from './heartbeat'
import Aten from './aten'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aten />
        <MealTicker />
        <WeatherTime />
        <HeartBeat />
      </div>
    );
  }
}

export default App
