import React from 'react';
import github from '../assets/icons/icons8-github-24.png';
import linkedin from '../assets/icons/icons8-linkedin-24.png';
import twitter from '../assets/icons/icons8-twitter-24.png';
import gmail from '../assets/icons/icons8-gmail-24.png';

const Main = () => (
  <div className="main-content">
    <h1 className="intro-name">Hello, I&apos;m Luis Saavedra</h1>
    <h2 className="intro-work">I&apos;m a Full-Stack Developer</h2>
    <p className="intro-info">
      I can help you build a product, feature or website. Look through some of my projects,
      if you like what you see feel free to contact me. I&apos;m a reliable person and
      a team worker.
    </p>
    <div className="main-social-media">
      <ul className="list-center">
        <li>
          <a href="https://github.com/nriqu322/">
            <img src={github} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://github.com/nriqu322/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/nriqu322/">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="mailto:lenrique.saavedra@gmail.com">
            <img src={gmail} alt="gmail" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Main;
