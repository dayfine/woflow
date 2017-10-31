import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import MenuItem from 'material-ui/Menu/MenuItem'

import taskMapper from '../util/taskMapper'

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
    this.state = {
      task: this.props.currentTask
    }
  }

  handleChange = e => {
    const update = {}
    update[e.target.name] = e.target.value
    this.setState({
      task: { ...this.state.task, ...update },
    })
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTask !== this.props.currentTask) {
      this.setState({ task: nextProps.currentTask });
    }
  }

  render () {
    const { handleChange } = this
    const { task } = this.state
    const { projects, classes } = this.props

    return (
      <div className={classes.taskHeader} >
        <Typography type='display3' align='left'>
          <TextField id='task' value={task.description} onChange={handleChange}/>
        </Typography>
        <Typography type='display1' align='left'>
          <TextField
            id='project'
            select
            value={task.projectId || ''}
            label='Project'
            margin='normal'
            onChange={handleChange}
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
  currentTask: taskMapper(state.currentTaskId, state.events),
  projects: state.projects
})

export default connect(mapState)(StyledComponent)
