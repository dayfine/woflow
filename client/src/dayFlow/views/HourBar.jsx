import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { formatHour } from '../util/helpers'

const styles = {
  hourBar: {
    height: '100%'
  },
  hourLabel: {
    height: 75,
    textAlign: 'right'
  },
  filler: {
    height: 100
  }
}

const TimeCard = props => {
  const { classes, setting } = props
  const { daySpan } = setting
  const clocks = Array.from({length: daySpan[1] - daySpan[0]}, (v, i) => daySpan[0] + i)
  console.log(clocks)
  return (
    <div className={classes.hourBar}>
      <div className={classes.filler} />
      {clocks.map(clock => {
        return (
          <div className={classes.hourLabel} key={clock}>
            {formatHour(clock)}
          </div>
        )
      })}
    </div>
  )
}

const mapState = state => {
  return {
    setting: state.setting
  }
}

export default withStyles(styles)(connect(mapState)(TimeCard))
