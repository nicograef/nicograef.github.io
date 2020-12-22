import React from 'react'

import styles from '../styles/skills.module.css'

export default ({ title, skills }) => (
  <div className={styles.skillCategory}>
    <h4 className={styles.skillCategoryTitle}>{title}</h4>
    <ul className={styles.skillList}>
      {skills.map(skill => (
        <li key={skill} className={styles.skillListItem}>
          {skill}
        </li>
      ))}
    </ul>
  </div>
)
