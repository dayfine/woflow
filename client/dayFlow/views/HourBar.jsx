import React from 'react'
import { withStyles } from 'material-ui/styles'
import { formatHour } from '../util/helpers'

const styles = {
  hourBar: {
    height: '100%',
    borderLeft: '1px solid #eee'
  },
  hourLabel: {
    height: 100,
    textAlign: 'right',
    paddingRight: 9
  },
  filler: {
    height: 100
  }
}

const TimeCard = ({daySpan, classes}) => {
  const clocks = Array.from({length: daySpan[1] + 1 - daySpan[0]}, (v, i) => daySpan[0] + i)

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

export default withStyles(styles)(TimeCard)
