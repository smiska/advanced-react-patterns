import React from 'react'

export const SVGCircle = ({ x, y, r, color }) => (
  <svg>
    <circle cx={x} cy={y} r={r} fill={color} />
  </svg>
)