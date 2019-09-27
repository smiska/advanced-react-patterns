import React from 'react'
import radium from 'radium'

const styles = {
  outline: 'none',
  border: 'none',
  borderRadius: 5,
  backgroundColor: '#ff0000',
  padding: 20,
  width: 320,
  ':hover': {
    backgroundColor: '#0ff000'
  },
  '@media (max-width: 600px)': {
    width: 140
  }
}

const RadiumButton = () => (
  <button style={styles}>I'm on radium</button>
)

export default radium(RadiumButton)