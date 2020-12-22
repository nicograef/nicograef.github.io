import React from 'react'
import styles from '../styles/footer.module.css'

import Link from './Link'

export default () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      {links.map((link) => (
        <Link url={link.url} title={link.title} key={link.title} />
      ))}
    </div>
  </footer>
)

const links = [
  {
    title: 'Email',
    url: 'mailto:graef.nico@gmail.com',
  },
  {
    title: 'Github',
    url: 'https://github.com/nicograef',
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/nicograef',
  },
  {
    title: 'Xing',
    url: 'https://xing.com/profile/Nico_Graef2/',
  },
]
