import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { views as TimeCard } from './timeCard/'
import { views as DayFlows } from './dayFlow/'

import AppBar from 'material-ui/AppBar'
import { GridList, GridListTile } from 'material-ui/GridList'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

// A class, potentially needs to initiate the store here when backend is hooked up
class App extends Component {
  render () {
    const colors = this.props.colors
    return (
      <div className='App'>
        <AppBar position='static'>
          <IconButton aria-label='Delete' disabled color='primary'>
            <Icon>alarm</Icon>
          </IconButton>
        </AppBar>
        <GridList cols={12} cellHeight='auto'>
          <GridListTile cols={4}>
            <TimeCard />
          </GridListTile>
          <GridListTile cols={8}>
            <DayFlows numDays={5} />
          </GridListTile>
        </GridList>
      </div>
    )
  }
}

const mapState = state => ({
  colors: state.setting.colors
})

export default connect(mapState)(App)
