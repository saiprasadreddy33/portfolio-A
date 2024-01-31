import {
  IDynamicScripts,
  INavMenuItems,
  ISocialMediaLinks,
  ISkills,
  IExperience,
  INewExperience
} from '../interfaces';

import { Tag } from 'ng-tagcanvas';

export const ScriptStore: IDynamicScripts[] = [
  { name: 'oscillator', src: './assets/js/oscillator.js' },
  { name: 'jquery', src: './assets/js/jquery.js' },
  { name: 'skills', src: './assets/js/skills.js' }
];

export const NavMenuItems: INavMenuItems[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Skills', link: '/skills' },
  { title: 'Experience', link: '/experience' },
  { title: 'Blog', link: '/blog-posts' }
];

export const SKILLS: ISkills = {
  techSkills: [
    'HTML',
    'CSS / SCSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'NgRx',
    'GraphQL',
    'Git',
  ],
  mgmtSkills: [
    'Strategic Planning',
    'Developing front-end architecture',
    'Innovative Approach',
    'Critical Thinking',
    'Mentoring',
    'Teamwork and Delegation',
    'Coordinating'
  ],
  softSkills: [
    'Leadership',
    'Teamwork',
    'Work Ethic',
    'Problem Solving',
    'Public Speaking',
    'Professional Writing',
    'Punctuality',
    'Digital Literacy',
    'Intercultural Fluency'
  ]
};

export const SocialMediaProfiles: ISocialMediaLinks[] = [
  {
    title: 'Facebook',
    profileUrl: 'https://www.facebook.com/',
    iconPath: '../../../assets/images/facebook.png'
  },
  {
    title: 'Twitter',
    profileUrl: 'https://twitter.com/_watt0',
    iconPath: '../../../assets/images/twitter.png'
  },
  {
    title: 'Instagram',
    profileUrl: 'https://www.instagram.com/__watto_',
    iconPath: '../../../assets/images/instagram.png'
  },
  {
    title: 'LinkedIn',
    profileUrl: 'https://www.linkedin.com/in/madireddy-sai-prasad-reddy-b4b035176',
    iconPath: '../../../assets/images/linkedin.png'
  },
  {
    title: 'GitHub',
    profileUrl: 'https://github.com/saiprasadreddy33',
    iconPath: '../../../assets/images/github.png'
  },
];

export const TAGS: Tag[] = [
  { weight: 22, text: 'Git' },
  { weight: 24, text: 'JavaScript' },
  { weight: 24, text: 'NgRx' },
  { weight: 20, text: 'Bootstrap' },
  { weight: 32, text: 'Angular' },
  { weight: 30, text: 'TypeScript' },
  { weight: 18, text: 'npm' },
  { weight: 20, text: 'CSS3' },
  { weight: 16, text: 'GraphQL' },
  { weight: 30, text: 'HTML5' },
  { weight: 24, text: 'JSON' },
  { weight: 24, text: 'SCSS' },
  { weight: 16, text: 'Angular.js' },
  { weight: 20, text: 'SQL' }
];

export const TAG_CANVAS_OPTIONS: TagCanvasOptions = {
  clickToFront: 500,
  textColour: '#FFF',
  outlineThickness: 0.5,
  outlineColour: 'transparent',
  maxSpeed: 0.05,
  freezeActive: true,
  shuffleTags: true,
  shape: 'sphere',
  zoom: 1,
  wheelZoom: false,
  noSelect: false,
  freezeDecel: true,
  fadeIn: 3000,
  initial: [0.3, -0.1],
  depth: 1.1,
  weight: true,
  reverse: true
};

export const NEW_EXPERIENCES: INewExperience[] = [
  {
    accentColor: '#41516c',
    date: '2022',
    title: 'Trainee Software Engineer',
    description: `Trainee`
  },
  {
    accentColor: '#fbca3e',
    date: '2023-present',
    title: 'Software Engineer,',
    description: `Working as a  front  Angular developer`
  },
];

export const EXPERIENCES: IExperience[] = [
  {
    company: 'Cerone Software Pvt Ltd',
    designation: 'Trainee Software Engineer',
    yearRange: '2022 - 2023',
    role: 'Trainee'
  },
  {
    company: 'RJ Tech',
    designation: 'Software Engineer',
    yearRange: '2023 - present',
    role: 'SDE'
  },
];

export const MEDIUM_INTEGRATION_URL: string =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed';
