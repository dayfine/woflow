import React from 'react'
import { connect } from 'react-redux'
import { formatSeconds } from '../util/helpers'
import Button from 'material-ui/Button'
import { startTimer, pauseTimter, stopTimter } from '../actions'
import { LinearProgress } from 'material-ui/Progress'

// Need a control for toggling status

const Timer = props => {
  const { onSubmit, onStart, onPause, onStop } = props
  const { status, timePassed, totalSeconds } = props.timeCard
  return (
    <div>
      <form onSubmit={onSubmit} className='countdown-form'>
        <input type='text' name='time' placeholder='Enter time in seconds' />
        <button className='button expanded'>Start</button>
      </form>
      <div>status: {status}</div>
      <div className='clock'>
        {formatSeconds(totalSeconds - timePassed).split('').map((chr, idx) => {
          return (<span key={idx} className='clock-text'>{chr}</span>)
        })}
      </div>
      <Button children='Start' onClick={onStart} />
      <Button children='Pause' onClick={onPause} />
      <Button children='End' onClick={onStop} />
      <LinearProgress
        mode='determinate'
        max={totalSeconds}
        value={totalSeconds - timePassed}
      />
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
    dispatch(startTimer(parseInt(strSeconds, 10)))
  },
  onToggle (evt) {

  },
  onStart () { dispatch(startTimer()) },
  onPause () { dispatch(pauseTimter()) },
  onStop () { dispatch(stopTimter()) }
})

export default connect(mapState, mapDispatch)(Timer)
