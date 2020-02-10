import React from 'react'
import me from '../images/me.jpg'

export default ({className}) => (
  <img src={me} alt="Nico Graef" className={className} style={{ maxWidth: 150, borderRadius: '50%' }} />
)
