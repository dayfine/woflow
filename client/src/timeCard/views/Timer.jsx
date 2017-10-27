import React from 'react'
import { connect } from 'react-redux'
import { formatSeconds } from '../util/helpers'
import FlatButton from 'material-ui/FlatButton'
import { startTimer, pauseTimter, stopTimter } from '../actions'

// Need a control for toggling status

const Timer = props => {
  const { onSubmit, onStart, onPause, onStop } = props
  const { status, totalSeconds } = props.timeCard
  return (
    <div>
      <form onSubmit={onSubmit} className='countdown-form'>
        <input type='text' name='time' placeholder='Enter time in seconds' />
        <button className='button expanded'>Start</button>
      </form>

      <div className='clock'>
        <div>status: {status}</div>
        {formatSeconds(totalSeconds).split('').map((chr, idx) => {
          return (<span key={idx} className='clock-text'>{chr}</span>)
        })}
      </div>
      <FlatButton label='Start' onClick={onStart} />
      <FlatButton label='Pause' onClick={onPause} />
      <FlatButton label='End' onClick={onStop} />
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
  },
  onToggle (evt) {

  },
  onStart () { dispatch(startTimer()) },
  onPause () { dispatch(pauseTimter()) },
  onStop () { dispatch(stopTimter()) }
})

export default connect(mapState, mapDispatch)(Timer)
