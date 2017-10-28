import React from 'react'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import Timer from './Timer'
import RingTimer from './RingTimer'

import './TimeCard.css'

const styles = {
  task: {
    fontSize: 40,
    display: 'block'
  },
  project: {
    fontSize: 25,
    display: 'block'
  }
}

const TimeCard = props => {
  // const { task } = props
  // const project = task.project.name
  return (
    <Card>
      <CardHeader style={{height: 160, backgroundColor: '#eee'}}>
        <TextField id='task' value='My Task' style={styles.task} />
        <TextField id='project' value='My Project' style={styles.project} />
      </CardHeader>
      <CardText>
        <Timer />
      </CardText>
      <Divider />
      <i className='mui-icons pull-right'>launch</i>
      <RingTimer />
      <Divider />
    </Card>

  )
}

export default connect(null, null)(TimeCard)
