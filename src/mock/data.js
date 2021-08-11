import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nicolás Kestelboim | Front End Developer',
  lang: 'en, es',
  description: 'Web Developer specialized in React, Gatsby and WordPress',
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Nicolás Kestelboim',
  subtitle: 'and I love Web Development',
  cta: 'Contact me',
};

// ABOUT DATA
export const aboutData = {
  img: 'kestel.jpg',
  paragraphOne:
    'Front-End Developer with experience developing responsive websites. During the last two years I worked as a freelance developing sites for small and medium clients. Knowledge of the following technologies and languages: HTML, CSS, Sass, Javascript, Ruby on Rails, React, GatsbyJS, GraphQL, MySQL, Wordpress and Shopify.',
  resume: 'https://www.linkedin.com/in/nicolaskestelboim/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'frigo.jpg',
    title: 'Frigo Music Maker',
    info: 'I made the musical grid and player front end for a food gaming section.',
    info2: '',
    url: 'https://www.frigocheeseheads.com/en/fun-and-game',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pollerapantalon.jpg',
    title: 'Pollera Pantalón NGO',
    info: 'I developed an institutional Website based on Wordpress for a non governmental entrepreneurship women organization.',
    info2: '',
    url: 'http://pollerapantalon.org/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'esineron.jpg',
    title: 'Esineron - Easy Building',
    info: 'I worked on  the development of this spanish construction company website made with Wordpress.',
    info2: '',
    url: 'https://www.esineron.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you have a web project?',
  btn: 'Write me',
  email: 'nicolas@kestel.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicolaskestelboim/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nicokest',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
