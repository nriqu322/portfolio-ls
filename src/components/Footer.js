import React from 'react';
import github from '../assets/icons/icons8-github-24.png';
import linkedin from '../assets/icons/icons8-linkedin-24.png';
import twitter from '../assets/icons/icons8-twitter-24.png';
import gmail from '../assets/icons/icons8-gmail-24.png';

const Footer = () => (
  <div className="footer">
    <ul className="list-center">
      <li>
        <a href="https://github.com/nriqu322/" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/luis-saavedra-sanchez/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/nriqu322/" target="_blank" rel="noreferrer">
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
);

export default Footer;
