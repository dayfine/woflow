import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const style = {

}

const NavBar = props => {
  const { colors } = props
  return (
    <AppBar position='static' style={{backgroundColor: colors.primary}}>
      <IconButton aria-label='Delete'>
        <Icon>alarm</Icon>
      </IconButton>
    </AppBar>
  )
}

const mapState = state => ({
  colors: state.setting.colors
})

export default withStyles(style)(connect(mapState)(NavBar))
