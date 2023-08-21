import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">커뮤니티</Link>
      <Link to="/store">스토어</Link>
    </nav>
  );
}
