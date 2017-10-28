import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'

const styles = {

}

class CountDownInput extends Component {
  constructor () {
    super()
  }

  render () {
    <TextField
      id='select-project'
      select
      label='Project'
      value={this.state.currency}
      onChange={this.handleChange('currency')}
      SelectProps={{
        MenuProps: {
        }
      }}
      helperText='Please select your currency'
      margin='normal'
        >
      {[1, 2, 3].map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
          ))}
    </TextField>
  }
}

const mapState = state => ({
  timer: state.timer
})

const mapDispatch = state => ({
  timer: state.timer
})

export default connect(mapState, mapDispatch)(CountDownInput)
