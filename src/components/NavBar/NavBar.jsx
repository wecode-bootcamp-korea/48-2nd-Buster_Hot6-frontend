import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/">커뮤니티</Link>
      <Link to="/store">스토어</Link>
    </nav>
  );
}
