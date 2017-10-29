import React from 'react'

const styles = {
  hourBar: {
    width: 30,
    height: '100%'
  },
  filler: {
    height: 100
  }
}

const HourBar = () => {
  return (
    <div style={styles.hourBar}>
      <div style={styles.filler} />
      time
    </div>
  )
}

export default HourBar
