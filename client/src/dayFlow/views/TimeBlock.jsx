import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Grid from 'material-ui/Grid'

import { setCurrTask } from '../../common/currentTaskReducer'
import { moveBlock } from '../actions'

import { DragSource, DropTarget } from 'react-dnd'
import ItemTypes from '../../ItemTypes'

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

const cardSource = {
  beginDrag (props) {
    console.log('cardprop', props)
    return {
      id: props.block.id,
      priority: props.block.priority,
    }
  }
}

const collectSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const cardTarget = {
  drop (props, monitor, component) {
    const dragId = monitor.getItem().id
    const dragIndex = monitor.getItem().priority
    const dropIndex = props.block.priority

    if (dragIndex === dropIndex) return
    dragIndex > dropIndex
      ? props.moveBlock(dragId, dropIndex - 1)
      : props.moveBlock(dragId, dropIndex + 1)
  }
}

const collectTarget = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
})

const TimeBlock = props => {
  const { isDragging, connectDragSource, connectDropTarget, } = props
  const { block, classes, setCurrTask } = props
  return connectDragSource(
    connectDropTarget(<div>
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
            onClick={setCurrTask.bind(this, block.id)}
            color='contrast'
            aria-label='Start'>
            <Icon style={{ fontSize: 20 }}>play_arrow</Icon>
          </IconButton>
          <IconButton
            className={classes.icon}
            aria-label='Edit'>
            <Icon style={{ fontSize: 20, color: 'white' }}>mode_edit</Icon>
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  </div>
  ))
}

const mapDispatch = ({ setCurrTask, moveBlock })

export default  connect(null, mapDispatch)(
                withStyles(styles)(
                DragSource(ItemTypes.CARD, cardSource, collectSource)(
                DropTarget(ItemTypes.CARD, cardTarget, collectTarget)(
                  TimeBlock
                ))))
