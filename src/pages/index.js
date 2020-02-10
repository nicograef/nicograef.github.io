import React from 'react'

import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

import SEO from '../components/SEO'

export default () => (
  <div id="site">
    <SEO title="" />
    <Intro />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </div>
)
