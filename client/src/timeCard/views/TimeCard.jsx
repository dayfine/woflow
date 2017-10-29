import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timer from './Timer'
import RingTimer from './RingTimer'
import Modal from '../../common/Modal.jsx'

import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const styles = {
  taskHeader: {
    height: 120,
    backgroundColor: '#FE6B8B'
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
    return (
      <div>
        <Modal
          open={this.state.modalOpen}
          onClose={closeModal}
          children={<RingTimer         size={900}/>}
        />
        <Card>
          <CardContent className={classes.taskHeader}>
            <Typography type='display3' align='left'>
              <TextField id='task' value='My Task' />
            </Typography>
            <Typography type='display1' align='left'>
              <TextField
                id='project'
                select
                value='My Project'
                >
                {[1, 2, 3].map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                  ))}
              </TextField>
            </Typography>
          </CardContent>
          <CardContent>
            <Timer />

            <Divider />
            <IconButton onClick={openModal}>
              <Icon>launch</Icon>
            </IconButton>
            <RingTimer />
            <Divider />
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(connect(null, null)(TimeCard))

  // <TextField
  //   id='select-project'
  //   select
  //   label='Project'
  //   value='Stackathon'
  //   onChange={this.handleChange}
  //   SelectProps={{
  //     MenuProps: {
  //     }
  //   }}
  //   margin='normal'
  //     >
  //   {[1, 2, 3].map(option => (
  //     <MenuItem key={option.value} value={option.value}>
  //       {option.label}
  //     </MenuItem>
  //       ))}
  // </TextField>
