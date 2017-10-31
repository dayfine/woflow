import React from 'react'

import { withStyles } from 'material-ui/styles'
import Dialog from 'material-ui/Dialog'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Slide from 'material-ui/transitions/Slide'

const styles = {
  children: {
    top: '100vh',
    left: '100vw'
  }
}

const FullScreenDialog = ({ open, onClose, children, classes }) => {
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

        <div className={classes.children}>
          {children}
        </div>
      </Dialog>
    </div>
  )
}

export default withStyles(styles)(FullScreenDialog)
