import React from 'react'
import {Card, CardHeader} from 'material-ui/Card'

const TimeBlock = ({ block }) => {
  return (
    <Card>
      <CardHeader
        title={block.description}
        subtitle={block.projectId}
        actAsExpander
        showExpandableButton
      />
    </Card>
  )
}

export default TimeBlock
