import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import MenuItem from 'material-ui/Menu/MenuItem'

const styles = {
  taskHeader: {
    height: 200,
    backgroundColor: 'secondary',
    padding: 20
  }
}

const TaskHeader = props => {
  const { classes, projects } = props
  return (
    <div className={classes.taskHeader}>
      <Typography type='display3' align='left'>
        <TextField id='task' value='My Task' />
      </Typography>
      <Typography type='display1' align='left'>
        <TextField
          id='project'
          select
          value='My Project'
          label='Project'
          SelectProps={{
            MenuProps: {
            }
          }}
          onChange={this.handleChange}
          margin='normal'
          >
          {projects.map(project => (
            <MenuItem key={project.id} value={project.id}>
              {project.name}
            </MenuItem>
            ))}
        </TextField>
      </Typography>
    </div>
  )
}

const StyledComponent = withStyles(styles)(TaskHeader)

const mapState = state => ({
  event: state.timer,
  projects: state.projects
})

export default connect(mapState)(StyledComponent)
