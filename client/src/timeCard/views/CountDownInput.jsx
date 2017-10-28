import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import Input from 'material-ui/Input'
import Icon from 'material-ui/Icon'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { parseSeconds, makeTimeStr, parseTimeStr } from '../util/helpers'
import { startTimer } from '../actions'
import Typography from 'material-ui/Typography'

const styles = {

}

const theme = createMuiTheme({
  direction: 'rtl'
});



class CountDownInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: props.time
    }
  }

  handleChange = e => {
    let str = e.target.value
    if (str.length > 6) str = str.substr(str.length - 6)
    this.setState({
      time: str.padStart(6, '0')
    })
  }

  handleClear = () => {
    this.setState({ time: ''})
  }

  render () {
    const { time } = this.state
    const { startTimer } = this.props
    return (
      <Typography type='display2' align='center'>
        <MuiThemeProvider theme={theme}>
          <div dir="rtl">
            <Input
              id="text-field-controlled"
              value={time}
              onChange={this.handleChange}
            />
            </div>
          </MuiThemeProvider>
        <span>{makeTimeStr(time)}</span>
        <Icon onClick={startTimer.bind(null, parseTimeStr(time))}>play_arrow</Icon>
        <Icon onClick={this.handleClear}>refresh</Icon>
      </Typography>
    )
  }
}

const mapState = state => ({
  time: parseSeconds(state.timer.totalSeconds)
})

const mapDispatch = ({ startTimer })

export default connect(mapState, mapDispatch)(CountDownInput)



