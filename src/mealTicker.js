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
              § looking directly into the sun is an immanent and dialectical procedure, the source of a radically democratic mode of knowledge, and the only way to free humanity from oppression. It’s the highest crime, not because it’s forbidden by law, but because every unjust law depends on our refusal to stare into the sun.™ 
            </div>
            <div className='ticker__item lunch'>
              § Andy: So what do you do? Frances: Eh… It’s kinda hard to explain. Andy: Because what you do is complicated? Frances: Eh… Because I don’t really do it.™
            </div>
            <div className='ticker__item dinner'>
               § Hypocrite that you are, for you trust the chemicals in your brain to tell you they are chemicals. All knowledge is ultimately based on that which we cannot prove. Will you fight? Or will you perish like a dog?™
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