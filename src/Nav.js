import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Header">About</Link>
        </li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
