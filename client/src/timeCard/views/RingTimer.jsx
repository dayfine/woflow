import React from 'react'
import { connect } from 'react-redux'
import { CircularProgress } from 'material-ui/Progress'

const RingTimer = props => {
  const { timePassed, totalSeconds } = props.timer
  const colors = props.colors
  // some style so to be used for modal/fullscreen
  return (
    <div style={{height: 340, padding: 'auto'}}>
      <CircularProgress
        mode='determinate'
        max={totalSeconds}
        min={0}
        value={totalSeconds - timePassed}
        size={300}
        thickness={4}
      />
    </div>
  )
}

const mapState = state => ({
  timer: state.timer,
  colors: state.setting.colors
})

export default connect(mapState)(RingTimer)
