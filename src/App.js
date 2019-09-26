import React from 'react'
import logo from 'logo.svg'
import 'App.css'
import Form from 'components/Form'
import { MagicButton } from 'components/MagicButton'
import JSONSchemaForm from 'components/JSONSchemaForm'
import { Transition, MotionedHeading } from 'components/animations/transition'
import { SVGCircle } from 'components/SVGCircle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SVGCircle x={50} y={50} r={25} color={'blue'} style={{ position: 'absolute', top: 30, left: 30 }} />
        <SVGCircle x={50} y={50} r={25} color={'blue'} style={{ position: 'absolute', top: 30, right: 30 }} />

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
        <Form />
        {/* <JSONSchemaForm /> */}
        <MagicButton />
        <div>
          <MotionedHeading />
        </div>
        <SVGCircle x={50} y={50} r={25} color={'blue'} style={{ position: 'absolute', bottom: 30, left: 30 }} />
        <SVGCircle x={50} y={50} r={25} color={'blue'} style={{ position: 'absolute', bottom: 30, right: 30 }} />
      </header>
    </div>
  );
}

export default App;
