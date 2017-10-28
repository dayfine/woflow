import React from 'react'

const
  today = new Date().getTime(),
  addDay = (time, n) => time + n * 24 * 60 * 60 * 1000,
  renderDate = miliseconds => {
    const date = new Date(miliseconds)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (
      <div>
        <div className='h5'>{days[date.getDay()]}</div>
        <div className='h1'>{date.getDate()}</div>
      </div>
    )
  }
