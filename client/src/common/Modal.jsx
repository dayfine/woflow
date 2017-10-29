import React from 'react'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Dialog from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import Slide from 'material-ui/transitions/Slide'

const styles = {
}

const FullScreenDialog = ({ open, onClose, children }) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        transition={<Slide direction='up' />}
      >
        <AppBar className=''>
          <Toolbar>
            <IconButton color='contrast' onClick={onClose} aria-label='Close'>
              <Icon>clear</Icon>
            </IconButton>
            <Typography type='title' color='inherit' className=''>
              Clock!
            </Typography>
            <Button color='contrast'>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  )
}

export default withStyles(styles)(FullScreenDialog)
