import React from 'react';

const Header = () => {
  return (
    <header className="header" id="header">
      <a href="#" className="logo">Portfolio</a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <span className="active-nav"></span>
      </nav>
    </header>
  );
}

export default Header;
