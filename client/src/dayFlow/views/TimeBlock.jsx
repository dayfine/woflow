import React from 'react'
import Card, { CardHeader} from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'

const styles = {
  block: {
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
      style={{height: block.duration * 75}}
      >
      <CardHeader
        title={block.description}
        subtitle={block.projectId}
        />
    </Card>
  )
}

export default withStyles(styles)(TimeBlock)
