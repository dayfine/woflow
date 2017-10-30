import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import Icon from 'material-ui/Icon'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import { parseSeconds, parseTimeStr } from '../util/helpers'
import { startTimer } from '../actions'


const styles = {
  timer: {
    width: 270
  }
}

const theme = createMuiTheme({
  direction: 'rtl'
})


class CountDownInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: props.time
    }
  }

  handleChange = e => {
    const re = /^\d{2}:\d{2}:\d{1,3}$/
    let time = e.target.value

    if (!re.test(time)) return
    time = time.replace(/:/g,'')
    time = time.length > 6 ? time.substr(1) : time.padStart(6,'0')
    time = time.match(/\d{2}/g).join(':')

    this.setState({ time })
  }

  handleClear = () => {
    this.setState({ time: '00:00:00'})
  }

  render () {
    const { time } = this.state
    const { startTimer, classes } = this.props
    return (
      <div>
        <Typography type='display4' align='center'>
          <MuiThemeProvider theme={theme}>
            <div dir="rtl">
              <Input
                id="timeInput"
                value={time}
                autoFocus={true}
                onChange={this.handleChange}
                className={classes.timer}
              />
            </div>
          </MuiThemeProvider>
        </Typography>
        <Icon onClick={startTimer.bind(null, parseTimeStr(time))}>play_arrow</Icon>
        <Icon onClick={this.handleClear}>refresh</Icon>
      </div>
    )
  }
}

const styledComponent = withStyles(styles)(CountDownInput)

const mapState = state => ({
  time: parseSeconds(state.timer.totalSeconds)
})

const mapDispatch = ({ startTimer })

export default connect(mapState, mapDispatch)(styledComponent)



