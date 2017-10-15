import React from 'react'

export default class extends React.Component {
  render () {
    return (
      <div className='liveBox'>
        <div className='liveContainer'>
          <iframe id='ytchat' title='chat' type='text/html' 
            src='https://www.youtube.com/live_chat?v=AQBh9soLSkI&embed_domain=localhost:3000'
            frameBorder="0"></iframe>
        </div>
      </div>
    )
  }
}