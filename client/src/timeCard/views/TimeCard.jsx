import React from 'react'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Clock from './Timer'

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

const TimeCard = () => {
  return (
    <Card>
      <CardHeader style={{height: 200, backgroundColor: '#eee'}}>
        <TextField id='task' value='My Task' style={styles.task} />
        <TextField id='project' value='My Project' style={styles.project} />
      </CardHeader>
      <CardText />
      <CardActions>
        <Clock totalSeconds={10000} />
        <FlatButton label='Action1' />
      </CardActions>
    </Card>
  )
}

export default connect(null, null)(TimeCard)
