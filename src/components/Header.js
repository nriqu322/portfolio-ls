import React, { useEffect, useState } from 'react';

const Header = () => {
  const [className, setClassName] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setClassName('header scroll');
    } else {
      setClassName('header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <header className={className}>
      <ul className="list-center">
        <li>Main</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
