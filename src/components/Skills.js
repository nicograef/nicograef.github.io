import React from 'react'

import SkillCategory from './SkillCategory'

export default () => (
  <section className="skills full-width">
    {/* <h3 className="section-title">Stuff I'm feeling confident with</h3> */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
      }}
    >
      {skills.map(skill => (
        <SkillCategory key={skill.title} title={skill.title} skills={skill.skills} />
      ))}
    </div>
  </section>
)

const skills = [
  {
    title: 'Languages',
    skills: ['Typescript', 'Javascript', 'HTML & CSS', 'Java', 'Python', 'JSON']
  },
  {
    title: 'Frameworks',
    skills: [
      'React JS',
      'Node JS',
      'Express JS',
      'Gatsby',
      'VueJS',
      'Material UI',
      'Progressive Web Apps',
      'Jest JS'
    ]
  },
  {
    title: 'Tools',
    skills: [
      'Git & Github',
      'Bash & Linux',
      'VS Code',
      'Chrome DevTools',
      'NPM',
      'Postman',
      'Cordova & Phonegap'
    ]
  },
  {
    title: 'Design',
    skills: ['Adobe XD', 'Wireframing', 'Design Thinking', 'User Testing', 'Responsive Web Design']
  },
  {
    title: 'Backend',
    skills: ['Firebase', 'MongoDB', 'Express', 'CouchDB']
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'Testing', 'Travis CI', 'Heroku']
  }
]
