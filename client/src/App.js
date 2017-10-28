import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import './App.css'
import { views as TimeCard } from './timeCard/'
import { views as DayFlows } from './dayFlow/'

import AppBar from 'material-ui/AppBar'

// A class, potentially needs to initiate the store here when backend is hooked up
class App extends Component {
  render () {
    const colors = this.props.colors
    return (
      <div className='App'>
        <AppBar
          title='Welcome To Woflow!'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          style={{backgroundColor: colors.pDark}}
        />
        <GridList cols={12} cellHeight='auto'>
          <GridTile cols={4}>
            <TimeCard />
          </GridTile>
          <GridTile cols={8}>
            <DayFlows numDays={5} />
          </GridTile>
        </GridList>
      </div>
    )
  }
}

const mapState = state => ({
  colors: state.setting.colors
})

export default connect(mapState)(App)
