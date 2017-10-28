import React from 'react'
import TimeBlock from './TimeBlock'

const DayFlow = ({ blocks }) => {
  return (
    <div className='dayflow'>
      {blocks.map(block => {
        return (<TimeBlock block={block} key={block.id} />)
      })}
    </div>
  )
}

export default DayFlow
