import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import MenuItem from 'material-ui/Menu/MenuItem'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Grid from 'material-ui/Grid'

import taskMapper from '../util/taskMapper'
import { actions as eventActions } from '../../dayFlow'

const { addBlock, updateBlock } = eventActions

const styles = {
  taskHeader: {
    height: 280,
    background: 'linear-gradient(45deg, #03A9F4 10%, #B2EBF2 90%)',
    color: 'white',
    padding: '100px 20px 10px'
  },
  icon: {
    height: 'auto',
    width: 'auto',
    padding: '40px 0px 10px',
    margin: 0
  }
}

class TaskHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: this.props.currentTask
    }
  }

  handleChange = name => e => {
    const update = {}
    update[name] = e.target.value
    this.setState({
      task: { ...this.state.task, ...update },
    })
  }

  handleSubmit = () => {
    const { addBlock, updateBlock } = this.props
    const { task } = this.state
    task.id > 0 ? updateBlock(task) : addBlock(task)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTask !== this.props.currentTask) {
      this.setState({ task: nextProps.currentTask });
    }
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { task } = this.state
    const { projects, classes } = this.props

    return (
      <div className={classes.taskHeader} >
        <Typography type='display3' align='left'>
          <TextField
            id='description'
            value={task.description}
            onChange={handleChange('description')}/>
        </Typography>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography type='display1' align='left'>
              <TextField
                select
                id='projectId'
                value={task.projectId || 0}
                label='Project'
                margin='normal'
                onChange={handleChange('projectId')}
              >
                <MenuItem value={0}>
                  Choose A Project...
                </MenuItem>
                {projects.map(project => (
                  <MenuItem key={project.id} value={project.id}>
                    {project.name}
                  </MenuItem>
                ))}
              </TextField>
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography type='display1' align='left'>
               <TextField
                id='duration'
                value={task.duration}
                label='Hours'
                onChange={handleChange('duration')}
                type='number'
                margin='normal'
                />
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              className={classes.icon}
              aria-label='submit'
              onClick={handleSubmit}>
              <Icon>done</Icon>
            </IconButton>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const StyledComponent = withStyles(styles)(TaskHeader)

const mapState = state => ({
  currentTask: taskMapper(state.currentTaskId, state.events),
  projects: state.projects
})

const mapDispatch = ({ addBlock, updateBlock })

export default connect(mapState, mapDispatch)(StyledComponent)
