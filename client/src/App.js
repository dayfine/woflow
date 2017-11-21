import React, { Component } from 'react'
import './App.css'

import { views as TimeCard } from './timeCard/'
import { views as DayFlows } from './dayFlow/'
import NavBar from './common/NavBar'
import Tooltip from './common/Tooltip'

import { GridList, GridListTile } from 'material-ui/GridList'

// A class, potentially needs to initiate the store here when backend is hooked up
class App extends Component {
  render () {
    return (
      <div className='App' style={{overflow: 'hidden'}}>
        <NavBar />
        <GridList cols={12} cellHeight='auto' spacing={0}>
          <GridListTile cols={4}>
            <TimeCard />
          </GridListTile>
          <GridListTile cols={8}>
            <DayFlows />
          </GridListTile>
        </GridList>
        <Tooltip />
      </div>
    )
  }
}

export default App
