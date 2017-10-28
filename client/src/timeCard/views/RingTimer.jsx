import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'

const RingTimer = props => {
  const { status, timePassed, totalSeconds } = props.timeCard
  return (
    <div style={{height: 300, padding: 'auto'}}>
      <CircularProgress
        mode='determinate'
        max={totalSeconds}
        min={0}
        value={totalSeconds - timePassed}
        size={180}
        thickness={20}
        innerStyle={{transform: 'rotate(270deg)'}}
        color='#555'
      />
    </div>
  )
}

const mapState = state => ({
  timeCard: state.timeCard
})

export default connect(mapState)(RingTimer)
