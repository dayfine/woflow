import React, { Component } from 'react'
import { connect } from 'react-redux'

import TaskHeader from './TaskHeader'
import RingTimer from './RingTimer'
import Modal from '../../common/Modal.jsx'
import CountDownInput from './CountDownInput'
import CountDownToggle from './CountDownToggle'

import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import { LinearProgress } from 'material-ui/Progress'


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
    const { status, totalSeconds, timePassed } = this.props.timer
    return (
      <div>
        <Modal
          open={this.state.modalOpen}
          onClose={closeModal}
          children={<RingTimer size={900}/>}
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
              max={totalSeconds}
              value={totalSeconds - timePassed}
            />
          </CardContent>
          <CardContent>
            <IconButton onClick={openModal}>
              <Icon>launch</Icon>
            </IconButton>
            <RingTimer />
          </CardContent>
        </Card>
      </div>
    )
  }
}

const mapState = state => ({
  timer: state.timer
})

export default connect(mapState)(TimeCard)


