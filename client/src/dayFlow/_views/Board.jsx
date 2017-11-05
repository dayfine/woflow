import React, { Component } from 'react'
import { connect } from 'react-redux'
import Knight from './Knight'
import Square from './Square'
import { moveKnight } from '../_reducer'

class Board extends Component {
  renderSquare (i) {
    const { knightPosition, moveKnight } = this.props
    const x = i % 8
    const y = Math.floor(i / 8)
    const black = (x + y) % 2 === 1

    const [knightX, knightY] = knightPosition
    const Piece = (x === knightX && y === knightY)
      ? <Knight />
      : null

    return (
      <div key={i}
        style={{ width: '12.5%', height: '12.5%', minHeight: 50 }}
        onClick={moveKnight.bind(this, x, y)}>
        <Square black={black}>
          {Piece}
        </Square>
      </div>
    )
  }

  render () {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i))
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    )
  }
}

const mapState = state => ({
  knightPosition: state.knightPosition
})

const mapDispatch = ({ moveKnight })

export default connect(mapState, mapDispatch)(Board)
