import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Dialog from 'material-ui/Dialog'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Slide from 'material-ui/transitions/Slide'
import { CircularProgress } from 'material-ui/Progress'

import CountDownToggle from '../timeCard/views/CountDownToggle'

const styles = {
  children: {
    top: '100vh',
    left: '100vw'
  },
  center: {
    margin: 'auto',
    position: 'absolute',
    zIndex: 4999
  },
  centerTimer: {
    margin: 'auto',
    position: 'absolute',
    zIndex: 5000
  }

}

const FullScreenDialog = props => {
  const { open, onClose, classes } = props
  const { timePassed, totalSeconds } = props.timer
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        transition={<Slide direction='up' />}
      >

        <IconButton color='contrast' onClick={onClose} aria-label='Close'>
          <Icon>clear</Icon>
        </IconButton>
        <div className={classes.center}>
          <CircularProgress
            mode='determinate'
            max={totalSeconds}
            min={0}
            value={totalSeconds - timePassed}
            size={750}
            thickness={4}
            />
        </div>
        <CountDownToggle className={classes.centerTimer} />
      </Dialog>
    </div>
  )
}

const StyledComponent = withStyles(styles)(FullScreenDialog)

const mapState = state => ({
  timer: state.timer,
  colors: state.setting.colors
})

export default connect(mapState)(StyledComponent)
