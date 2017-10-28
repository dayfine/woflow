import React from 'react'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import DayFlow from './DayFlow'

const
  today = new Date().getTime(),
  addDay = (time, n) => time + n * 24 * 60 * 60 * 1000,
  renderDate = miliseconds => {
    const date = new Date(miliseconds)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (
      <div>
        <div className='h5'>{days[date.getDay()]}</div>
        <div className='h1'>{date.getDate()}</div>
      </div>
    )
  }

const Days = props => {
  const { numDays } = props
  return (
    <div className='days'>
      <GridList cols={numDays} cellHeight='auto'>
        {Array(...Array(numDays)).map((el, idx) => {
          return (
            <GridTile cols={1} key={idx}>
              { renderDate(addDay(today, idx))}
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
