import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Motion, spring } from 'react-motion'
import './transition.css'

export const Transition = () => (
  <ReactCSSTransitionGroup
    transitionName="fade"
    transitionAppear
    transitionAppearTimeout={500}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}  // necessary, so React knows the transition length
  >
    <h1>Hello React Transition</h1>
  </ReactCSSTransitionGroup>
)

export const MotionedHeading = () => (
  <Motion
    defaultStyle={{ opacity: 0.01 }}
    style={{ opacity: spring(1) }}
  >
    {interpolatingStyle => (
      <h2 style={interpolatingStyle}>Gimme some motion</h2>
    )}
  </Motion>
)