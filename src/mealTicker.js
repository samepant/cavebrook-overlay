import React from 'react'
import contentfulClient from './utilities/contentful'
import Moment from 'moment'

import './mealTicker.css'

export default class extends React.Component {
  constructor () {
    super()

    this.state = {
      meals: {
        breakfast: '',
        lunch: '',
        dinner: ''
      }
    }

    this.getWeather = this.getWeather.bind(this)
  }

  componentWillMount () {
    const currentFood = setInterval(this.getWeather, 1800000)
    contentfulClient.getEntries({
      'content_type': 'cafeteria'
    })
      .then(res => {
        const today = Moment().format('YYYY-MM-DD')
        console.log(res.items)
        res.items.forEach( item => {
          if (item.fields.date === today) {
            let todayMenu = {
              breakfast: item.fields.breakfast,
              lunch: item.fields.lunch,
              dinner: item.fields.dinner
            }
            this.setState({meals: todayMenu})
          }
        })
      })
      .catch(console.error)
  }

  getWeather () {
    contentfulClient.getEntries({
      'content_type': 'cafeteria'
    })
      .then(res => {
        const today = Moment().format('YYYY-MM-DD')
        console.log(res.items)
        res.items.forEach( item => {
          if (item.fields.date === today) {
            let todayMenu = {
              breakfast: item.fields.breakfast,
              lunch: item.fields.lunch,
              dinner: item.fields.dinner
            }
            this.setState({meals: todayMenu})
          }
        })
      })
      .catch(console.error)
  }

  render () {
    return (
      <div className='ticker-parent'>
        <div className='ticker-wrap'>
          <div className='ticker'>
            <div className='ticker__item breakfast'>
              <span className='meal-title'>Breakfast: </span>{this.state.meals.breakfast}
            </div>
            <div className='ticker__item lunch'>
              <span className='meal-title'>Lunch: </span>{this.state.meals.lunch}
            </div>
            <div className='ticker__item dinner'>
              <span className='meal-title'>Dinner: </span>{this.state.meals.dinner} 
            </div>
          </div>  
        </div>
        <div className='archer'>
          <img src='/cranbrook-archer.png' alt='archer' />
        </div>
      </div>
    )
  }
}