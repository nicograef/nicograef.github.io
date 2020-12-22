import React from 'react'
import styles from '../styles/link.module.css'

export default ({ title, url, inline }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    key={title}
    className={inline && styles.inline}
  >
    {title}
  </a>
)
