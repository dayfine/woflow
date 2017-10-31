import React from 'react'

import { withStyles } from 'material-ui/styles'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Grid from 'material-ui/Grid'

const styles = {
  block: {
    padding: 9,
    position: 'relative'
  },
  icon: {
    height: 'auto',
    width: 'auto',
    padding: 0,
    margin: 0
  }
}

const TimeBlock = props => {
  const { classes, block } = props
  return (
    <Card
      className={classes.block}
      style={{height: block.duration * 100}}
      >
      <Grid container>
        <Grid item xs={10}>
          <Typography type='display1' align='left' style={{ color: '#03A9F4'}}>
            {block.description}
          </Typography>
          <Typography type='title' align='left'>
            {block.project && block.project.name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            className={classes.icon}
            color='contrast'
            aria-label='Start'>
            <Icon style={{ fontSize: 20 }}>play_arrow</Icon>
          </IconButton>
          <IconButton
            className={classes.icon}
            color='contrast'
            aria-label='Edit'>
            <Icon style={{ fontSize: 20 }}>mode_edit</Icon>
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  )
}

export default withStyles(styles)(TimeBlock)
