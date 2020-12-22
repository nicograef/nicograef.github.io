import React from 'react'
import Link from './Link'

export default () => (
  <section className="about">
    <h3>About Me</h3>
    <p>
      Since I got into programming 10 years ago I worked on many different projects for fun and
      professionally. While studying computer science and electrical engineering at the University
      of Freiburg I earned my living as a freelance software developer, web designer and online
      marketing consultant. In 2017 I{' '}
      <Link inline title="co-founded a startup" url="https://urknall.co" /> trying to build a
      platform for community-driven projects. During this time I developed a native android app, a
      hybrid app and several features for the web backend. Latetly I'm getting more and more
      interested in Open Source projects and Progressive Web Apps built with React JS.
    </p>
    <p>
      To free my mind from async code and linter warnings I like to cook with and for friends,
      listen to a podcast while having a cup of coffee and running at the Dreisam{' '}
      <span role="img" aria-label="river">
        🌊
      </span>
      .
    </p>
    <p style={{ fontSize: 'smaller', marginLeft: -10, marginTop: '2rem' }}>
      {links.map((link) => (
        <Link url={link.url} title={link.title} key={link.title} />
      ))}
    </p>
  </section>
)

const links = [
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
  {
    title: 'Twitter',
    url: 'https://twitter.com/nicograef/',
  },
  {
    title: 'Email',
    url: 'mailto:graef.nico@gmail.com',
  },
]
