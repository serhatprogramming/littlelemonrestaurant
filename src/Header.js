import React from "react";
import Logo from "./images/Logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;
