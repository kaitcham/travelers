import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'Profile',
    },
  ];
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <ul className="navbar">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                exact="true"
                to={link.path}
                className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
