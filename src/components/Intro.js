import React from 'react'

export default () => (
  <header
    className="intro"
    style={{
      maxWidth: '800px',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }}
  >
    <h1>
      Moinseeen!{' '}
      <span role="img" aria-label="waving hand">
        👋
      </span>
    </h1>

    <h2>
      I'm <b>Nico Gräf</b>, a software engineer focused on building and designing beautiful web
      &amp; app experiences.
    </h2>
  </header>
)
