import React from 'react'

export class MagicButton extends React.Component {

  handleEvent = ({ type }) => {
    switch (type) {
      case 'click':
        console.log('click')
        break;
      case 'dblclick':
        console.log('dblclick')
        break;

      default:
        console.log('other event')
        break;
    }

  }

  render = () => {
    return (
      <button
        onClick={this.handleEvent}
        onDoubleClick={this.handleEvent}
        onKeyDown={this.handleEvent}
      >Click to pollute console</button>
    )
  }
}
