import React from 'react'
import me from '../images/me.jpg'

export default ({ className, maxWidth }) => (
  <img src={me} alt="Nico Graef" className={className} style={{ maxWidth, borderRadius: '50%' }} />
)
