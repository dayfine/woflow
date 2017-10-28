import React from 'react'
import Card, { CardHeader} from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'

const styles = {
  block: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
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
      <CardHeader
        title={block.description}
        subtitle={block.projectId}
        actAsExpander
        showExpandableButton
        />
    </Card>
  )
}

export default withStyles(styles)(TimeBlock)
