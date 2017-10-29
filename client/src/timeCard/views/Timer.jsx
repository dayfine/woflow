import React from 'react'
import { connect } from 'react-redux'
import { makeTimeStr, parseSeconds } from '../util/helpers'
import Button from 'material-ui/Button'
import { startTimer, pauseTimter, stopTimter } from '../actions'
import { LinearProgress } from 'material-ui/Progress'
import CountDownInput from './CountDownInput'

// Need a control for toggling status

const Timer = props => {
  const { onSubmit, onStart, onPause, onStop } = props
  const { status, timePassed, totalSeconds } = props.timer
  return (
    <div>
      <CountDownInput />
      <div>status: {status}</div>
      <div className='clock' style={{fontSize: 56}}>
        {makeTimeStr(parseSeconds(totalSeconds - timePassed)).split('').map((chr, idx) => {
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
  timer: state.timer
})

const mapDispatch = dispatch => ({
  onStart () { dispatch(startTimer()) },
  onPause () { dispatch(pauseTimter()) },
  onStop () { dispatch(stopTimter()) }
})

export default connect(mapState, mapDispatch)(Timer)
