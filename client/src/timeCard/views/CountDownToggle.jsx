import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'

import { toggleTimer, stopTimer } from '../actions'
import { parseSeconds } from '../util/helpers'

const styles = {
  started: {

  },
  stopped: {

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
  const { totalSeconds, timePassed } = props.timer
  return (
    <div>
      <Typography type='display4' align='center'>
        <div className={classes.timer} onClick={toggleTimer}>
          {parseSeconds(totalSeconds - timePassed)}
        </div>
      </Typography>
      <Icon onClick={stopTimer}>clear</Icon>
    </div>
  )
}

// {parseSeconds(totalSeconds - timePassed).split('').map((chr, idx) => {
//   return (<span key={idx}>{chr}</span>)
// })}

const styledComponent = withStyles(styles)(CountDownToggle)

const mapState = state => ({
  timer: state.timer
})

const mapDispatch = ({ toggleTimer, stopTimer })

export default connect(mapState, mapDispatch)(styledComponent)
