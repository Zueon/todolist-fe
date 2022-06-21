import React from 'react';
import { signout } from '../services/ApiService';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <p className="navbar-brand mb-0 font-weight-bold">
          {localStorage.getItem('USERNAME')}'s TODO LIST
        </p>

        <ul className="navbar-nav ">
          <li className="nav-item ">
            <button className="nav-link" onClick={signout}>
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
