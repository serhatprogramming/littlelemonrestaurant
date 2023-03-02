import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>Menu</li>
        <li>
          <Link to="/bookingpage">Reservations</Link>
        </li>
        <li>Order Online</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
