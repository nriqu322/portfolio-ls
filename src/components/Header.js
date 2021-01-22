import React, { useEffect, useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [className, setClassName] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setClassName('header scroll');
    } else {
      setClassName('header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div className={className}>
      <ul className="list-center">
        <li><Link smooth to="/#">Main</Link></li>
        <li><Link smooth to="/#portfolio">Portfolio</Link></li>
        <li><Link smooth to="/#about">About</Link></li>
        <li><Link smooth to="/#contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;
