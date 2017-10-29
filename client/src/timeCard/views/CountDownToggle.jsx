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
    // position: 'absolute',
    // zIndex: 1,
    // top: '30vh',
    // left: '20vw',
    // fontSize: 160
  }
}

const CountDownToggle = props => {
  const { toggleTimer, stopTimer, classes } = props
  const { totalSeconds, timePassed } = props.timer
  return (
    <div className={classes.timer} >
      <Typography type='display4' align='center'>
        <div className='clock' onClick={toggleTimer}>
          {parseSeconds(totalSeconds - timePassed).split('').map((chr, idx) => {
            return (<span key={idx}>{chr}</span>)
          })}
        </div>

        <Icon onClick={stopTimer}>clear</Icon>
      </Typography>
    </div>
  )
}

const mapState = state => ({
  timer: state.timer
})

const mapDispatch = ({ toggleTimer, stopTimer })

export default withStyles(styles)(connect(mapState, mapDispatch)(CountDownToggle))
