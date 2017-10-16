import React from 'react'
import './heartbeat.css'

export default class extends React.Component {
  render () {
    return (
      <div className='heartbeat'>
        <img src='/heart.png' alt='heart' className='heart steady' />
      </div>
    )
  }
}