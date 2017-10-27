import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import './App.css'
import { views as TimeCard } from './timeCard/'

import AppBar from 'material-ui/AppBar'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AppBar
          title='Title'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
        />
        <GridList cols={12} cellHeight='auto'>
          <GridTile cols={6}>
            <TimeCard />
          </GridTile>
        </GridList>
      </div>
    )
  }
}

export default App
