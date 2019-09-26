import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.focused = React.createRef()
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleClick = () => {
    this.focused.current.focus()
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${this.state.firstName} ${this.state.lastName}`)
  }

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
        </label>

        <input ref={this.focused} type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        <button type="button" name="focusButton" onClick={this.handleClick}>Focus</button>

        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <button name="submitButton">Submit</button>
      </form>
    )
  }
}