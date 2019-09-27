import React from 'react'

export default class MagicInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fsize: 10
    }
  }

  handleChange = ({ target }) => {
    this.setState({ fsize: Number(target.value) })
  }

  render = () => {
    return (
      <input
        type="number"
        value={this.state.fsize}
        onChange={this.handleChange}
        style={{ fontSize: this.state.fsize }}
      />
    )
  }
}