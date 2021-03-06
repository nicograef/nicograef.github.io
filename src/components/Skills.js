import React from 'react'

import SkillCategory from './SkillCategory'

export default () => (
  <section className="skills full-width">
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
      }}
    >
      {skills.map((skill) => (
        <SkillCategory key={skill.title} title={skill.title} skills={skill.skills} />
      ))}
    </div>
  </section>
)

const skills = [
  {
    title: 'Languages',
    skills: ['Typescript', 'Javascript', 'HTML & CSS', 'SQL', 'Java', 'Python', 'JSON'],
  },
  {
    title: 'Frameworks',
    skills: ['React JS', 'Node JS', 'VueJS', 'Express JS', 'Gatsby', 'Progressive Web Apps', 'Jest JS'],
  },
  {
    title: 'Tools',
    skills: ['Git & Github', 'Bash & Linux', 'VS Code', 'Chrome DevTools', 'NPM', 'Postman'],
  },
  {
    title: 'Backend',
    skills: ['Node JS', 'SQL & MySQL', 'Firebase', 'MongoDB', 'GCP', 'Express', 'CouchDB'],
  },
  {
    title: 'DevOps',
    skills: ['Testing', 'CI / CD', 'Google Cloud', 'Travis CI', 'Docker', 'Heroku'],
  },
  {
    title: 'Design',
    skills: ['Adobe XD', 'Wireframing', 'Design Thinking', 'User Testing', 'Responsive Web Design'],
  },
]
