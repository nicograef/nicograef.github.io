import React from 'react'
import styles from '../styles/footer.module.css'

import Avatar from './Avatar'
import Link from './Link'

export default () => (
  <footer className={styles.footer}>
    <Avatar className={styles.avatar} />
    <div className={styles.links}>
      {links.map(link => (
        <Link url={link.url} title={link.title} key={link.title} className={styles.link} />
      ))}
    </div>
  </footer>
)

const links = [
  {
    title: 'Email',
    url: 'mailto:graef.nico@gmail.com'
  },
  {
    title: 'Github',
    url: 'https://github.com/nicograef'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/nicograef'
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/nicograef'
  },
  {
    title: 'Xing',
    url: 'https://xing.com/profile/Nico_Graef2/'
  }
]
