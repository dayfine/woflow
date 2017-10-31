import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import MenuItem from 'material-ui/Menu/MenuItem'

const styles = {
  taskHeader: {
    height: 280,
    background: 'linear-gradient(45deg, #03A9F4 10%, #B2EBF2 90%)',
    color: 'white',
    padding: '120px 20px 10px'
  }
}

class TaskHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {...this.props}
  }

  render () {
    const { classes, projects, blockId } = this.props
    return (
      <div className={classes.taskHeader} >
        <Typography type='display3' align='left'>
          <TextField id='task' value='My Task' />
        </Typography>
        <Typography type='display1' align='left'>
          <TextField
            id='project'
            select
            value='My Project'
            label='Project'
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
}

const StyledComponent = withStyles(styles)(TaskHeader)

const mapState = state => ({
  projects: state.projects
})

export default connect(mapState)(StyledComponent)
