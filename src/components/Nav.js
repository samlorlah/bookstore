import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
  const linkStyle = {
    textDecoration: 'none',
  };
  return (
    <nav>
      <div className="nav-menu">
        <p>Bookstore CMS</p>
        <ul>
          <li>
            <Link style={linkStyle} to="/">BOOKS</Link>
          </li>
          <li style={{ opacity: '0.5' }}>
            <Link style={linkStyle} to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <div className="userIconCont">
        <FaUserAlt style={{ color: '#0290ff' }} />
      </div>
    </nav>
  );
};

export default Nav;
