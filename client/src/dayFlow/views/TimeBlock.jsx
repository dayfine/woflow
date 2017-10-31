import React from 'react'

import { withStyles } from 'material-ui/styles'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const styles = {
  block: {
    padding: 9
  },
  label: {
    textTransform: 'capitalize'
  }
}

const TimeBlock = props => {
  const { classes, block } = props
  return (
    <Card
      className={classes.block}
      style={{height: block.duration * 100}}
      >
      <Typography type='display1' align='left'>
        {block.description}
      </Typography>
      <Typography type='title' align='left'>
        {block.project && block.project.name}
      </Typography>
    </Card>
  )
}

export default withStyles(styles)(TimeBlock)
