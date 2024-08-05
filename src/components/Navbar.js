import React, { useEffect, useRef } from 'react';
// import 'boxicons';
import '../styles/style.css';

const Navbar = () => {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const sectionsRef = useRef([]);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const handleMenuClick = () => {
      menuIconRef.current.classList.toggle('bx-x');
      navbarRef.current.classList.toggle('active');
    };

    const handleScroll = () => {
      const sections = sectionsRef.current;
      const navLinks = navLinksRef.current;
      const top = window.scrollY;

      sections.forEach(sec => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (document.querySelector(`header nav a[href*=${id}]`)) {
              document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            }
          });
        }
      });

      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      menuIconRef.current.classList.remove('bx-x');
      navbarRef.current.classList.remove('active');
    };

    menuIconRef.current.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      menuIconRef.current.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header" id="header">
      <a href="#" className="logo">Portfolio</a>
      <div ref={menuIconRef} className="bx bx-menu" id="menu-icon"></div>
      <nav ref={navbarRef} className="navbar">
        <a href="#home" className="active" ref={el => navLinksRef.current[0] = el}>Home</a>
        <a href="#about" ref={el => navLinksRef.current[1] = el}>About</a>
        <a href="#education" ref={el => navLinksRef.current[2] = el}>Education</a>
        <a href="#skills" ref={el => navLinksRef.current[3] = el}>Skills</a>
        <a href="#contact" ref={el => navLinksRef.current[4] = el}>Contact</a>
        <span className="active-nav"></span>
      </nav>
    </header>
  );
};

export default Navbar;
