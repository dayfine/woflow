import React from 'react'
import Control from './Control'
import CountDownForm from './CountDownForm'

// const CountDown = () => {
//   const renderControl = () => {
//     return countDownStatus === 'counting'
//       ? (<Control />)
//       : (<CountDownForm onSetCountdown={this.handleSetCountdown} />)
//   }
// }

const Clock = ({ totalSeconds }) => {
  return (
    <div className='clock'>
      {formatSeconds(totalSeconds).split('').map((chr, idx) => {
        return (<span key={idx} className='clock-text'>{chr}</span>)
      })}
    </div>
  )
}

const formatSeconds = totalSeconds => {
  let seconds = totalSeconds % 60
  let minutes = Math.floor(totalSeconds / 60) % 60
  let hours = Math.floor(totalSeconds / 3600)

  ;[ seconds, minutes, hours ].forEach(n => {
    if (n < 10) n = `0${n}`
  })

  return `${hours > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

const mapState = state => ({

})

export default connect(mapState, null)(TimeCard)
