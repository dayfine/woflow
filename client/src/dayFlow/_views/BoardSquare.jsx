import React from 'react'
import Square from './Square'
import { connect } from 'react-redux'
import { moveKnight } from '../_reducer'
import { ItemTypes } from '../../constants'
import { DropTarget } from 'react-dnd'

const squareTarget = {
  drop (props, monitor) {
    console.log(props)
    props.moveKnight(props.x, props.y)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
})

const BoardSquare = props => {
  console.log(props)
  const { x, y, connectDropTarget, isOver } = props
  const black = (x + y) % 2 === 1
  return connectDropTarget(
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}>
      <Square black={black}>
        {props.children}
      </Square>
      {isOver &&
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: 'yellow'
        }} />
      }
    </div>
  )
}

const mapDispatch = ({ moveKnight })
const DropTargetComp = DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare)

export default connect(null, mapDispatch)(DropTargetComp)
