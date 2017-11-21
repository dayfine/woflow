import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'

import CountDownToggle from './CountDownToggle'

const styles = {
  timer: {
    position: 'absolute',
    zIndex: 1,
    top: '50vh',
    left: '50vw'
  }
}

const RingTimer = props => {
  const { colors, size, classes } = props
  const { timePassed, totalSeconds } = props.timer

  // some style so to be used for modal/fullscreen
  return (
    <div style={{height: size * 1.1 || 320, padding: 'auto'}}>
      <CircularProgress
        mode='determinate'
        max={totalSeconds}
        min={0}
        value={totalSeconds - timePassed}
        size={size || 300}
        thickness={4}
      />
    </div>
  )
}

const StyledComponent = withStyles(styles)(RingTimer)

const mapState = state => ({
  timer: state.timer,
  colors: state.setting.colors
})

export default connect(mapState)(StyledComponent)
