import React from 'react'
import styles from 'components/styles/MagicButton.css'
import CSSModules from 'react-css-modules'

class MagicButton extends React.Component {

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
        styleName="button"
      >Click to pollute console</button>
    )
  }
}

export default CSSModules(MagicButton, styles)
