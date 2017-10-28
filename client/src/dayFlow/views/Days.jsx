import React from 'react'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import DayFlow from './DayFlow'

const Days = props => {
  const { numDays } = props
  return (
    <div className='days'>
      <GridList cols={numDays} cellHeight='auto'>
        {Array(...Array(numDays)).map((el, idx) => {
          return (
            <GridTile cols={1} key={idx}>
              <DayFlow />
            </GridTile>
          )
        })}
      </GridList>
    </div>
  )
}

const mapState = state => {
  return {

  }
}

export default connect(mapState)(Days)
