import React from 'react'
import { connect } from 'react-redux'
import { CircularProgress } from 'material-ui/Progress'

const RingTimer = props => {
  const { timePassed, totalSeconds } = props.timeCard
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
  timeCard: state.timeCard,
  colors: state.setting.colors
})

export default connect(mapState)(RingTimer)
