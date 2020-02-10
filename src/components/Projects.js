import React from 'react'

import whatTheFlag from '../images/projects/what-the-flag.jpg'
import sudokuApp from '../images/projects/sudoku-app.jpg'
import countryQuiz from '../images/projects/country-quiz.jpg'

import Link from './Link'
import Chip from './Chip'

export default () =>
  projects.map(project => (
    <section className="project">
      <h3>
        {project.title}{' '}
        <span style={{ fontSize: 'small' }}>
          {project.links.map(link => (
            <Link key={link.title} title={link.title} url={link.url} />
          ))}
        </span>
      </h3>
      <div>
        <p>
          {project.tags.map(tag => (
            <>
              <Chip key={tag} text={tag} />{' '}
            </>
          ))}
        </p>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} title={project.title} />
      </div>
    </section>
  ))

const projects = [
  {
    title: 'What The Flag',
    description:
      'A Quizduell-like game with questions about countries, capitals and flags where users can challenge each other. Developed for my room mates as a Progressive Web App with the MERN Stack.',
    image: whatTheFlag,
    tags: ['Progressive Web App', 'MongoDB', 'React JS', 'Express JS'],
    links: [
      {
        title: 'App',
        url: 'https://what-the-flag.herokuapp.com'
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/what-the-flag'
      }
    ]
  },
  {
    title: 'Sudoku Android App',
    description:
      "A native android app to learn and play sudoku puzzles. I started this project in early 2016 'cause I wanted to know how native app developing works. After publishing the first version I made a total revamp including a new design and a Sudoku of the Week.",
    image: sudokuApp,
    tags: ['Android', 'Firebase', 'Java', 'Native'],
    links: [
      {
        title: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=de.nicograef.sudokutrainer'
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/sudoku-trainer'
      }
    ]
  },
  {
    title: 'Country Quiz NPM Module',
    description:
      'I created this module as part of the What The Flag project and released it to NPM just out of curiosity. It lets you create questions and quizzes about countries, flags and capitals.',
    image: countryQuiz,
    tags: ['NPM', 'Travis CI', 'Documentation', 'Test Coverage'],
    links: [
      {
        title: 'NPM',
        url: 'https://www.npmjs.com/package/country-quiz'
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/country-quiz'
      }
    ]
  }
]
