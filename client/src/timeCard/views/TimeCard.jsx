import React from 'react'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Timer from './Timer'

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
      <Timer />
      <CardText />
    </Card>
  )
}

export default connect(null, null)(TimeCard)
