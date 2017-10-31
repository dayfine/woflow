import React from 'react'
import { GridList, GridListTile } from 'material-ui/GridList'

const styles = {
  header: {
    textAlign: 'left',
    paddingLeft: 15,
    borderLeft: '1px solid #eee',
    borderBottom: '1px solid #eee'

  },
  day: {
    fontSize: 20,
    paddingTop: 10,
    marginBottom: 0

  },
  date: {
    fontSize: 50,
    marginTop: -10
  }
}

const
  today = new Date().getTime(),
  addDay = (time, n) => time + n * 24 * 60 * 60 * 1000,
  renderDate = miliseconds => {
    const date = new Date(miliseconds)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (
      <div style={styles.header}>
        <div style={styles.day}>
          {days[date.getDay()]}
        </div>
        <div style={styles.date}>
          {date.getDate()}
        </div>
      </div>
    )
  }

const DayHeaders = props => {
  const { numDays } = props
  const daysArr = Array(...Array(numDays))
  return (
    <GridList cols={numDays} cellHeight={100} spacing={0}>
      {daysArr.map((el, idx) => {
        return (
          <GridListTile cols={1} key={idx}>
            { renderDate(addDay(today, idx))}
          </GridListTile>
        )
      })}
    </GridList>
  )
}

export default DayHeaders
