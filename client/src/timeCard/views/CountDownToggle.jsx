import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'

import { toggleTimer, stopTimer } from '../actions'
import { parseSeconds } from '../util/helpers'

const styles = {
  started: {
    zIndex: 8000
  },
  stopped: {
    zIndex: 8000
  },
  timer: {
    padding: '7px 0 9px',
    letterSpacing: 0,
    margin: 0,
    lineHeight: '1em'
  }
}

const CountDownToggle = props => {
  const { toggleTimer, stopTimer, classes } = props
  const { status, totalSeconds, timePassed } = props.timer
  return (
    <div className={status === 'started' ? classes.started : classes.stopped}>
      <Typography type='display4' align='center'>
        <div className={classes.timer} onClick={toggleTimer}>
          {parseSeconds(totalSeconds - timePassed)}
        </div>
      </Typography>
      <Icon onClick={stopTimer}>clear</Icon>
    </div>
  )
}

const styledComponent = withStyles(styles)(CountDownToggle)

const mapState = state => ({
  timer: state.timer
})

const mapDispatch = ({ toggleTimer, stopTimer })

export default connect(mapState, mapDispatch)(styledComponent)
