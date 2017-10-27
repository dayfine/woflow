import React from 'react'
import { connect } from 'react-redux'
import { formatSeconds } from '../util/helpers'

// Need a control for toggling status

const Timer = props => {
  const { onSubmit } = props
  const { status, totalSeconds } = props.timeCard
  return (
    <div>
      <form onSubmit={onSubmit} className='countdown-form'>
        <label htmlFor='time'>This is the Input Element</label>
        <input type='text' name='time' placeholder='Enter time in seconds' />
        <button className='button expanded'>Start</button>
      </form>

      <div className='clock'>
        <div>This is the Display Element</div>
        <div>{status}</div>
        {formatSeconds(totalSeconds).split('').map((chr, idx) => {
          return (<span key={idx} className='clock-text'>{chr}</span>)
        })}
      </div>
    </div>
  )
}

const mapState = state => ({
  timeCard: state.timeCard
})

const mapDispatch = (dispatch, ownProps) => ({
  onSubmit (evt) {
    evt.preventDefault()
    const strSeconds = evt.target.time.value

    if (!strSeconds.match(/^[0-9]*$/)) return

    evt.target.time.value = ''
    // ownProps.onSetCountdown(parseInt(strSeconds, 10))
  }
})

export default connect(mapState, mapDispatch)(Timer)
