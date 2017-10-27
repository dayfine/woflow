import React from 'react'
import { connect } from 'react-redux'

const CountdownForm = props => {
  const { onSubmit } = props
  return (
    <div>
      <form onSubmit={onSubmit} className='countdown-form'>
        <input type='text' name='time' placeholder='Enter time in seconds' />
        <button className='button expanded'>Start</button>
      </form>
    </div>
  )
}

const mapDispatch = (dispatch, ownProps) => ({
  onSubmit (evt) {
    evt.preventDefault()
    const strSeconds = evt.target.time.value

    if (!strSeconds.match(/^[0-9]*$/)) return

    evt.target.time.value = ''
    ownProps.onSetCountdown(parseInt(strSeconds, 10))
  }
})

export default connect(null, mapDispatch)(CountdownForm)
