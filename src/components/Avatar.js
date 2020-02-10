import React from 'react'
import me from '../images/me.jpg'

export default ({className}) => (
  <img src={me} alt="Nico Graef" className={className} style={{ maxWidth: 250, borderRadius: '50%' }} />
)
