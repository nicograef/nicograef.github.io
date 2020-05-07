import React from 'react'

import freiburgChallenge from '../images/projects/freiburg-challenge.jpg'
import whatTheFlag from '../images/projects/what-the-flag.jpg'
import sudokuApp from '../images/projects/sudoku-app.jpg'
import sudokuSolver from '../images/projects/sudoku-solver.jpg'
import countryQuiz from '../images/projects/country-quiz.jpg'
import wiwili from '../images/projects/wiwili.png'
import classification from '../images/projects/classification.jpg'
import kuunery from '../images/projects/kuunery.jpg'
import makelangelo from '../images/projects/makelangelo.jpg'
import smartCoffee from '../images/projects/smart-coffee.jpg'
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
            project.links.map((link) => (
              <Link key={link.title} title={link.title} url={link.url} />
            ))}
        </span>
      </h3>
      <div>
        <p>
          {project.tags.map((tag) => (
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
    title: 'Freiburg Challenge / 2020',
    description: "A location-based social game for Freiburg I'm currently working on.",
    image: freiburgChallenge,
    tags: ['Typescript', 'React JS', 'Firebase', 'Docker', 'PWA'],
  },
  {
    title: 'What The Flag / 2019',
    description:
      'A Quizduell-like game with questions about countries, capitals and flags where users can challenge each other. Developed for my room mates as a Progressive Web App with the MERN Stack.',
    image: whatTheFlag,
    tags: ['JavaScript', 'React JS', 'MongoDB', 'Express JS', 'PWA'],
    links: [
      {
        title: 'App',
        url: 'https://what-the-flag.herokuapp.com',
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/what-the-flag',
      },
    ],
  },
  {
    title: 'Sudoku Android App / 2016',
    description:
      "A native android app to learn and play sudoku puzzles. I started this project in early 2016 'cause I wanted to know how native app developing works. After publishing the first version I made a total revamp including a new design and a Sudoku of the Week.",
    image: sudokuApp,
    tags: ['Java', 'Android', 'Firebase'],
    links: [
      {
        title: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=de.nicograef.sudokutrainer',
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/sudoku-trainer',
      },
    ],
  },
  {
    title: 'Board Games App / 2018',
    description:
      "A functional mockup for a board games community app based on Framework7 and Cordova/Phonegap I designed for a friend's student project.",
    image: boardGamesCommunityApp,
    tags: ['Cordova', 'Framework7', 'Mockup', 'Prototype'],
    links: [
      {
        title: 'Demo',
        url: 'https://youtu.be/43I4IdAd3HA',
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/board-games-community-app',
      },
    ],
  },
  {
    title: 'Smart Coffee / 2015',
    description:
      'As part of a student project a fellow stundent and I hacked a coffee machine to accept orders via wifi. We also built a robot arm to serve cups and improved some sensors.',
    image: smartCoffee,
    tags: ['Arduino', 'C++', '3D-Printing', 'Embedded'],
    links: [
      {
        title: 'Video',
        url: 'https://youtu.be/dsMQO0oeDec',
      },
    ],
  },
  {
    title: 'Sudoku Solver / 2016',
    description:
      'Java gui application to solve sudokus I created out of curiosity back in 2016. I was wondering if I could come up with a algorithm to solve sudokus - on my on.',
    image: sudokuSolver,
    tags: ['Java', 'Desktop', 'Algorithms'],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/nicograef/sudoku-solver',
      },
    ],
  },
  {
    title: 'Wiwili / 2019',
    description:
      "In Freiburg there's a bridge called Wiwili and it's got a cyclists sensor built into the ground. I downloaded the data from FRITZ (the open data platform of Freiburg) and used it to play around with D3.JS.",
    image: wiwili,
    tags: ['Data Visualisation', 'D3.JS', 'Open Data'],
    links: [
      {
        title: 'Play',
        url: 'https://nicograef.com/wiwili',
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/wiwili',
      },
    ],
  },
  {
    title: 'ML Classification / 2016',
    description:
      'After completing an online course about Machine Learning I played around with the MNIST-dataset, implemented my version of the Genetic Algorithm and coded a Feed Forward Neural Network.',
    image: classification,
    tags: ['Python', 'Java', 'Machine Learning', 'Classification'],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/nicograef/ai',
      },
    ],
  },
  {
    title: 'Kuunery / 2019',
    description:
      'As an experiment in online marketing I invented an art magazine startup, set up an online shop with shopify and used instagram for marketing.',
    image: kuunery,
    tags: ['Online Marketing', 'Instagram', 'Shopify', 'Art'],
    links: [],
  },
  {
    title: 'Meisterwunder Pop-up Store / 2015',
    description:
      'As my first startup-like project a friend and I opened a pop-up store before christmas 2015. We offered custom portrait art and showed some art hacking experiments at our opening.',
    image: makelangelo,
    tags: ['Startup', 'Art'],
    links: [
      {
        title: 'Article',
        url:
          'https://fudder.de/in-merzhausen-hat-ein-popup-shop-eroeffnet-mit-einem-3d-drucker-fuer-dein-gesicht--117725437.html',
      },
      {
        title: 'Video',
        url: 'https://youtu.be/p4j1_mpg-3o',
      },
    ],
  },
  {
    title: 'Country Quiz NPM Module / 2019',
    description:
      'I created this module as part of the What The Flag project and published it to NPM just out of curiosity. It lets you create questions and quizzes about countries, flags and capitals. Later, I used this as a training project for testing and Travis CI.',
    image: countryQuiz,
    tags: ['NPM', 'Travis CI', 'Documentation', 'Test Coverage'],
    links: [
      {
        title: 'NPM',
        url: 'https://www.npmjs.com/package/country-quiz',
      },
      {
        title: 'Github',
        url: 'https://github.com/nicograef/country-quiz',
      },
    ],
  },
]
