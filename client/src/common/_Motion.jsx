import React from 'react'
import { spring, Motion } from 'react-motion'

<Motion
  defaultStyle={{x: 100}}
  style={{x: spring(0, {stiffness: 100, damping: 100})}}>
  {value => <div> {Math.ceil(value.x)}</div>}
</Motion>
