import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nicolás Kestelboim | Front End Developer',
  lang: 'en, es',
  description: 'Web Developer specialized in React',
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Nicolás Kestelboim',
  subtitle: 'and I love Web Development',
  cta: 'Send me a message',
};

// ABOUT DATA
export const aboutData = {
  img: 'kestel.jpg',
  paragraphOne:
    'Front-End Developer Jr. con experiencia desarrollando sitios web responsive. Durante los últimos dos años trabajé de forma freelance en el desarrollo de sitios para pequeños y medianos clientes. Conocimientos en las siguientes tecnologías y lenguajes: HTML, CSS, Sass, Javascript, Ruby on Rails, React, GatsbyJS, GraphQL, MySQL, Wordpress y Shopify.',
  paragraphTwo:
    'Anteriormente como Social Media Manager participé en el desarrollo e implementación de estrategias digitales a través de contenido web, email marketing y redes sociales, para las siguientes marcas: Personal, Arnet, Seguros La Caja, Experta ART, Actimel, Laboratorios ELEA, Consejo Interamericano de Comercio y Producción, Rust-Oleum Latinoamérica, GlobalLogic, Guajira Viajes y Turismo.',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/nicolaskestelboim/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you have a web project?',
  btn: 'Write me',
  email: 'nicolas.kestelboim@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
