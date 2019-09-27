import React from 'react'

export const SVGCircle = ({ x, y, r, color, style }) => (
  <svg width={2 * r} height={2 * r} style={style}>
    <circle cx={x} cy={y} r={r} fill={color} style={{ position: 'relative' }} />
  </svg>
)