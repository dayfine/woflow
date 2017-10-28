import React from 'react'
import { connect } from 'react-redux'
import mori from 'mori'
import { GridList, GridTile } from 'material-ui/GridList'
import DayFlow from './DayFlow'
import DayHeaders from './DayHeaders'
import blockMapper from '../util/blockMapper'

const styles = {
  gridList: {
    overflow: 'scroll'
  }
}

const Days = props => {
  const { events, numDays } = props
  const daysArr = Array(...Array(numDays))
  return (
    <div className='days'>
      <DayHeaders numDays={numDays} />
      <GridList
        cols={numDays}
        cellHeight='auto'
        padding={4}
        style={styles.gridList}
      >
        {daysArr.map((el, idx) => {
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
    events: state.events,
    numDays: state.setting.numDays
  }
}

export default connect(mapState)(Days)
