import React from 'react'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import DayFlow from './DayFlow'
import DayHeaders from './DayHeaders'

const Days = props => {
  const { numDays } = props
  const daysArr = Array(...Array(numDays))
  return (
    <div className='days'>

      <GridList cols={numDays} cellHeight='auto'>
        {daysArr.map((el, idx) => {
          return (
            <GridTile cols={1} key={idx}>
              <Paper zDepth={1}>
                { renderDate(addDay(today, idx))}
                <Divider />
                <DayFlow />
              </Paper>
            </GridTile>
          )
        })}
      </GridList>
    </div>
  )
}

const mapState = state => {
  return {
    events: state.events
  }
}

export default connect(mapState)(Days)
