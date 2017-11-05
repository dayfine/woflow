import React from 'react'
import { DragSource } from 'react-dnd'
import { ItemTypes } from '../../constants'

const knightSource = {
  beginDrag (props) {
    return {}
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const Knight = ({ connectDragSource, isDragging }) => {
  return connectDragSource(
    <div style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move'
    }}>
    ♘
    </div>
  )
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)
