import React from 'react'
import Moment from 'moment'
import axios from 'axios'
import './weatherTime.css'

export default class extends React.Component {
  constructor () {
    super()

    this.state = {
      time: Moment().format('H:mm:ss'),
      weather: {
        temp: '',
        icon: ''
      }
    }

    this.timer = this.timer.bind(this)
  }

  componentWillMount () {
    const currentTime = setInterval(this.timer, 1000)

    axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        zip: 48304,
        APPID: 'b7d2357b207f0acebff39d207d73b4c9'
      }
    }).then(res => {
      const weather = {
        temp: Math.floor(9/5*(res.data.main.temp - 273) + 32),
        icon: 'http://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png'
      }
      this.setState({weather: weather})
    }).catch(err => {
      console.log(err)
    })
  }

  timer () {
    const now = Moment().format('H:mm:ss')
    this.setState({time: now})
  }

  render () {
    return (
      <div className='weather-time'>
        <div className='temp'>
          {this.state.weather.temp}°
        </div>
        <div className='icon'>
          <img src={this.state.weather.icon} alt='weather-icon' />
        </div>
        <svg viewBox="0 -20 500 500" className='time'>
        <path id="curve" d="M 100 250 A 50 50 0 1 1 400 150" />
        <text width="500">
          <textPath xlinkHref="#curve" startOffset='15%'>
            {this.state.time}
          </textPath>
        </text>
      </svg>
      </div>
    )
  }
}