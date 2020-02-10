import React from 'react'
import Link from './Link'

export default () => (
  <section className="about">
    <h3>About Me</h3>
    <div>
      <p>
        Since I got into programming 10 years ago I worked on many different projects for fun and
        professionally. While studying computer science and electrical engineering at the University
        of Freiburg I earned my living as a freelance software developer, web designer and online
        marketing consultant. In 2017 I{' '}
        <Link inline title="co-founded a startup" url="https://urknall.co" /> trying to build a
        platform for community-driven projects. During this time I developed a native android app, a
        hybrid app and several features for the web backend. Recently I'm highly interested in
        Progressive Web Apps built with React JS.
      </p>
      <p>
        To free my mind from async code and linter warnings I like to cook with/for friends, listen
        to a podcast while having a cup of coffee or running at the Dreisam.
      </p>
    </div>
  </section>
)
