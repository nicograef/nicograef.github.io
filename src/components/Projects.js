import React from 'react'

import freiburgChallenge from '../images/projects/freiburg-challenge.jpg'
import whatTheFlag from '../images/projects/what-the-flag.jpg'
import sudokuApp from '../images/projects/sudoku-app.jpg'
import countryQuiz from '../images/projects/country-quiz.jpg'
import wiwili from '../images/projects/wiwili.png'
import boardGamesCommunityApp from '../images/projects/board-games-community-app.png'

import Link from './Link'
import Chip from './Chip'

export default () =>
  projects.map((project, index) => (
    <section key={project.title} className={`project big ${index % 2 ? 'left' : 'right'}`}>
      <h3>
        {project.title}{' '}
        <span style={{ fontSize: 'small' }}>
          {project.links &&
            project.links.map(link => <Link key={link.title} title={link.title} url={link.url} />)}
        </span>
      </h3>
      <div>
        <p>
          {project.tags.map(tag => (
            <Chip key={tag} text={tag} />
          ))}
        </p>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} title={project.title} />
      </div>
    </section>
  ))

const projects = [
  {
    title: 'Freiburg Challenge',
    description: "A location-based social game for Freiburg I'm currently working on.",
    image: freiburgChallenge,
    tags: ['PWA', 'Typescript', 'React JS', 'Firebase', 'Material UI']
  },
  {
    title: 'What The Flag',
    description:
      'A Quizduell-like game with questions about countries, capitals and flags where users can challenge each other. Developed for my room mates as a Progressive Web App with the MERN Stack.',
    image: whatTheFlag,
    tags: ['PWA', 'MongoDB', 'React JS', 'Express JS'],
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
    title: 'Board Games App',
    description:
      "A functional mockup for a board games community app based on Framework7 and Cordova/Phonegap I designed for a friend's student project.",
    image: boardGamesCommunityApp,
    tags: ['Cordova', 'Phonegap', 'Framework7', 'Mockup', 'Prototype'],
    links: [
      {
        title: 'Demo',
        url: 'https://youtu.be/43I4IdAd3HA'
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/board-games-community-app'
      }
    ]
  },
  {
    title: 'Wiwili',
    description:
      "In Freiburg there's a bridge called Wiwili and it's got a cyclists sensor built into the ground. I downloaded the data from FRITZ (the open data platform of Freiburg) and used it to play around with D3.JS.",
    image: wiwili,
    tags: ['Data Visualisation', 'D3.JS', 'Open Data'],
    links: [
      {
        title: 'Play',
        url: 'https://nicograef.com/wiwili'
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/wiwili'
      }
    ]
  },
  {
    title: 'Country Quiz NPM Module',
    description:
      'I created this module as part of the What The Flag project and published it to NPM just out of curiosity. It lets you create questions and quizzes about countries, flags and capitals. Later, I used this as a training project for testing and Travis CI.',
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
