import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
function Navbar() {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <span>Search</span>
      </Link>
      <Link to={'/fav'}>
        <span>Favorites</span>
      </Link>
    </div>
  );
}

export default Navbar;
