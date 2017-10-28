import React from 'react'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import DayFlow from './DayFlow'
import DayHeaders from './DayHeaders'
import HourBar from './HourBar'
import blockMapper from '../util/blockMapper'

const styles = {
  gridList: {
    overflowY: 'scroll'
  }
}

const Days = props => {
  const { eventsByDay } = props
  const { numDays, daySpan } = props.setting
  return (
    <div className='days'>
      <GridList cols={12} cellHeight='auto'>
        <GridTile cols={1}>
          <HourBar daySpan={daySpan} />
        </GridTile>
        <GridTile cols={11}>
          <DayHeaders numDays={numDays} />
          <GridList
            cols={numDays}
            cellHeight='auto'
            padding={0}
            style={styles.gridList}
          >
            {eventsByDay.map((dayEvents, idx) => {
              return (
                <GridTile cols={1} key={idx}>
                  <DayFlow blocks={dayEvents} />
                </GridTile>
              )
            })}
          </GridList>
        </GridTile>
      </GridList>
    </div>
  )
}

const mapState = state => {
  return {
    eventsByDay: blockMapper(state.events, state.setting),
    setting: state.setting
  }
}

export default connect(mapState)(Days)
