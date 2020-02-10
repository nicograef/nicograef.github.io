import React from 'react'

export default () => (
  <header
    className="intro"
    style={{
      maxWidth: '750px',
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignSelf: 'flex-start'
    }}
  >
    <h1>
      <span
        id="waving-hand"
        role="img"
        aria-label="waving hand"
        style={{ display: 'inline-block', marginRight: 25 }}
      >
        👋
      </span>
      Moinseeen!
    </h1>

    <h2 className="short-bio">
      I'm <b>Nico Gräf</b>, a software engineer focused on building and designing beautiful web
      &amp; app experiences.
    </h2>
  </header>
)
