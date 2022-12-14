import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/ToolhubLogo.svg';

const Navbar = () => (
  <nav className="nav--bar">
    <NavLink to="/">
      <div className="nav--bar--logo">
        <img className="toolhub--logo" src={logo} alt="toolhub logo" />
        <h1 className="logo--title">ToolHub</h1>
      </div>
    </NavLink>

    <div className="nav--bar--links">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active nav--link' : 'inactive nav--link')} end>
        Home
      </NavLink>
      <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? 'active nav--link' : 'inactive nav--link')}>
        Leaderboard
      </NavLink>
      <NavLink to="/recordsboard" className={({ isActive }) => (isActive ? 'active nav--link' : 'inactive nav--link')}>
        Records Board
      </NavLink>
    </div>
  </nav>

);

export default Navbar;
