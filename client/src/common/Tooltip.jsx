import React from 'react'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
// import IconButton from 'material-ui/IconButton'
import Tooltip from 'material-ui/Tooltip'

const styles = theme => ({
  absolute: {
    flip: false,
    position: 'absolute',
    bottom: 32,
    right: 32
  }
})

const Tooltips = props => {
  const { classes } = props
  return (
    <div>
      <Tooltip placement='bottom' title='Add new event'>
        <Button fab color='accent' className={classes.absolute}>
          <Icon children='add' />
        </Button>
      </Tooltip>
    </div>
  )
}

export default withStyles(styles)(Tooltips)
