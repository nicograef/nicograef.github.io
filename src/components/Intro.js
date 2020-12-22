import React from 'react'
import Avatar from './Avatar'
import styles from '../styles/intro.module.css'

export default () => (
  <header className="intro">
    <h1>
      <span role="img" aria-label="waving hand" className={styles.wave}>
        👋
      </span>
      Moinseeen!
    </h1>
    <div>
      <Avatar className={styles.avatar} />
      <h2>
        I'm <b>Nico Gräf</b>, a software engineer focused on building and designing beautiful web
        &amp; app experiences.
      </h2>
    </div>
  </header>
)
