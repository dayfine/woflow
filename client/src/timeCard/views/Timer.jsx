import React from 'react'
import { connect } from 'react-redux'

import CountDownInput from './CountDownInput'
import CountDownToggle from './CountDownToggle'
import { LinearProgress } from 'material-ui/Progress'

const Timer = props => {
  const { status, totalSeconds, timePassed } = props.timer
  return (
    <div>
      {status === 'stopped'
        ? (<CountDownInput />)
        : (<CountDownToggle />)
      }
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

export default connect(mapState)(Timer)
