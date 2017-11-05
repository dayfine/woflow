import React, { Component } from 'react'
import { connect } from 'react-redux'

import TaskHeader from './TaskHeader'
import RingTimer from './RingTimer'
import Modal from '../../common/Modal.jsx'
import CountDownInput from './CountDownInput'
import CountDownToggle from './CountDownToggle'

import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import { LinearProgress } from 'material-ui/Progress'

const styles = {
  relative: {position: 'relative'},
  absolute: {
    flip: false,
    position: 'absolute',
    top: 4,
    right: 8,
    zIndex: 1000
  }
}

class TimeCard extends Component {
  constructor () {
    super()
    this.state = {
      modalOpen: false
    }
  }

  openModal = () => {
    this.setState({ modalOpen: true})
  }

  closeModal = () => {
    this.setState({ modalOpen: false})
  }

  render () {
    const { openModal, closeModal } = this
    const { classes } = this.props
    const { status, totalSeconds, timePassed } = this.props.timer

    return (
      <div style={{paddingTop: 64}}>
        <Modal
          open={this.state.modalOpen}
          onClose={closeModal}
        />
        <Card>
          <TaskHeader />
          <CardContent>
          {status === 'stopped'
              ? (<CountDownInput />)
              : (<CountDownToggle />)
            }
            <LinearProgress
              mode='determinate'
              value={100 * (1- timePassed/totalSeconds)}
            />
            <div className={classes.relative}>
              <IconButton onClick={openModal} >
                <Icon>launch</Icon>
              </IconButton>
            </div>
            <RingTimer />
          </CardContent>
        </Card>

      </div>
    )
  }
}

const StyledComponent = withStyles(styles)(TimeCard)

const mapState = state => ({
  timer: state.timer
})

export default connect(mapState)(StyledComponent)



