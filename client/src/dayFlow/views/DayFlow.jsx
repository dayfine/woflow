import React from 'react'
import TimeBlock from './TimeBlock'
import { withStyles } from 'material-ui/styles'

const styles = {
  dayflow: {
    height: '100%',
    borderLeft: '1px solid #eee'
  }
}

const DayFlow = ({ blocks, classes }) => {
  return (
    <div className={classes.dayflow}>
      {blocks.map(block => {
        return (<TimeBlock block={block} key={block.id} />)
      })}
    </div>
  )
}

export default withStyles(styles)(DayFlow)
