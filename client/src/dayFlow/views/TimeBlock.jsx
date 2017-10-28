import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const TimeBlock = props => {
  return (
    <Card>
      <CardHeader
        title='Without Avatar'
        subtitle='Subtitle'
        actAsExpander
        showExpandableButton
      />
    </Card>
  )
}

export default TimeBlock
