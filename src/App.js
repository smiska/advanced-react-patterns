import React from 'react'
import { StyleRoot } from 'radium'
import logo from 'logo.svg'
import 'App.css'
import Form from 'components/Form'
import MagicButton from 'components/MagicButton'
import JSONSchemaForm from 'components/JSONSchemaForm'
import { Transition, MotionedHeading } from 'components/animations/transition'
import { SVGCircle } from 'components/SVGCircle'
import MagicInput from 'components/MagicInput'
import RadiumButton from 'components/RadiumButton'

function App() {
  return (
    <StyleRoot>
      <div className="App">
        <SVGCircle x={50} y={50} r={25} color={'blue'} style={{ position: 'absolute', top: 30, left: 30 }} />
        <SVGCircle x={50} y={50} r={25} color={'blue'} style={{ position: 'absolute', top: 30, right: 30 }} />

        <header className="App-header">

          <Transition />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <div>
            <Form />
          </div>
          {/* <JSONSchemaForm /> */}
          <div>
            <label>MagicButton</label>
            <MagicButton />
          </div>
          <div>
            <label>MagicInput</label>
            <MagicInput />
          </div>
          <div>
            <RadiumButton />
          </div>
          <div>
            <MotionedHeading />
          </div>
        </header>
        <SVGCircle x={50} y={50} r={25} color={'blue'} style={{ position: 'absolute', bottom: 30, left: 30 }} />
        <SVGCircle x={50} y={50} r={25} color={'blue'} style={{ position: 'absolute', bottom: 30, right: 30 }} />

      </div>
    </StyleRoot>
  );
}

export default App;
