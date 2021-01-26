import englishWise from './images/english-wise.png';
import ninjaSurvival from './images/ninja-survival.png';
import superheroCatalog from './images/superhero-catalog.png';
import timeTracker from './images/time-tracker.png';
import weatherApp from './images/weather-app.png';
import directoryOfCourses from './images/directory-of-courses.png';

const portfolioInfo = [
  {
    title: 'English Wise',
    id: 101,
    stack: ['React JS', 'Redux', 'Ruby on Rails', 'Netlify'],
    stackDetails: [['React JS', 1011], ['Redux', 1012], ['Ruby on Rails', 1013], ['Netlify', 1014], ['Jest and Enzyme', 1015]],
    description: 'English wise is an appoinment app to schedule a meeting with an english teacher. You have to be logged in to see the teachers available schedule and your own schedule. I use the React library to display the information required and Redux to manage the state of the app.',
    src: englishWise,
    liveDemoLink: 'https://nriqu322-english-wise.netlify.app/',
    githubLink: 'https://github.com/nriqu322/english-wise',
  },
  {
    title: 'Ninja Survival',
    id: 102,
    stack: ['Javascript', 'Phaser3', 'Heroku', 'Webpack'],
    stackDetails: [['Javascript', 1021], ['Phaser3', 1022], ['Heroku', 1023], ['Webpack', 1024], ['Babel', 1025], ['Jest', 1026]],
    description: 'A platform game developed with JavaScript and Phaser 3. In a future controlled by an Evil AI, a ninja has to survive by jumping from platform to platform, collecting ninja-stars, and kunais to increase the score, and give hope to mankind. Build the whole project, from story to deployment.',
    src: ninjaSurvival,
    liveDemoLink: 'https://still-river-44514.herokuapp.com/',
    githubLink: 'https://github.com/nriqu322/ninja-game',
  },
  {
    title: 'Superhero Catalog',
    id: 103,
    stack: ['React JS', 'Redux', 'Netlify', 'Bootstrap'],
    stackDetails: [['React JS', 1031], ['React router', 1032], ['Redux', 1033], ['Netlify', 1034], ['Bootstrap', 1035], ['Linters', 1036]],
    description: 'In this project I use the superheroApi to retrieve information about superheroes and villains from different universes. The Main page displays a list of heroes depending on the search term and then you can click on any card to see the details of the character like powerstats, appearance, work, biography and connections.',
    src: superheroCatalog,
    liveDemoLink: 'https://nriqu322-superhero-catalogue.netlify.app/',
    githubLink: 'https://github.com/nriqu322/superhero-catalogue',
  },
  {
    title: 'Time-Tracker',
    id: 104,
    stack: ['Ruby on Rails', 'RSpec', 'Heroku', 'Bootstrap'],
    stackDetails: [['Ruby on Rails', 1041], ['RSpec', 1042], ['Capybara', 1043], ['Heroku', 1044], ['Bootstrap', 1045], ['Rubocop', 1046]],
    description: 'Mobile app to track hours spent on projects. Users can Log in with proper authentication(email and password), and have a default user profile image that can be updated in the account settings. Users can create a task where you enter the hours spent and can be assigned to a Project.',
    src: timeTracker,
    liveDemoLink: 'https://fast-woodland-21539.herokuapp.com/',
    githubLink: 'https://github.com/nriqu322/time-tracker',
  },
  {
    title: 'Weather App',
    id: 105,
    stack: ['Javascript', 'CSS3', 'Bootstrap', 'OpenWeatherAPI'],
    stackDetails: [['Javascript', 1051], ['CSS3', 1052], ['Bootstrap', 1053], ['OpenWeatherAPI', 1054], ['Async/Await', 1055], ['Webpack', 1056]],
    description: 'A Javascript web application to retrieve weather information from the OpenWeatherAPI through async/await calls. You can enter a city to check the weather in °C or °F and a five days forecast',
    src: weatherApp,
    liveDemoLink: 'https://rawcdn.githack.com/nriqu322/weather-app/1d281b039cdbed32a3a7a688ab4b740b4267a8e8/dist/index.html',
    githubLink: 'https://github.com/nriqu322/weather-app',
  },
  {
    title: 'Directory of Courses',
    id: 106,
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Box Model'],
    stackDetails: [['HTML5', 1061], ['CSS3', 1062], ['Bootstrap', 1063], ['FlexBox', 1064], ['Box Model', 1065], ['Responsive design', 1066]],
    description: 'This project is a template of a Directory of online courses. You can find the search view, the filter section and details section',
    src: directoryOfCourses,
    liveDemoLink: 'https://raw.githack.com/nriqu322/directory-of-courses/master/main.html',
    githubLink: 'https://github.com/nriqu322/directory-of-courses',
  },
];

export default portfolioInfo;
