import React from 'react'
import { connect } from 'react-redux'
import Timer from './Timer'
import RingTimer from './RingTimer'

import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'

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
  return (
    <Card>
      <CardContent>
        <Typography type='display3' align='left'>
          <TextField id='task' value='My Task' />
        </Typography>
        <Typography type='display1' align='left'>
          <TextField id='project' value='My Project' />
        </Typography>
        <Timer />
        <Divider />
        <i className='mui-icons pull-right'>launch</i>
        <RingTimer />
        <Divider />
      </CardContent>
    </Card>
  )
}

export default connect(null, null)(TimeCard)

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
