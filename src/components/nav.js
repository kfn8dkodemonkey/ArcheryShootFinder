// src/components/nav.js
import * as React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand fw-bold" href="/">🏹 ArcheryShootFinder</a>
      <div className="navbar-nav ms-auto">
        {/*<a className="nav-link" href="#directory">Directory</a>*/}
        <a className="nav-link" href="#contact">Contact</a>
        <a className="nav-link" href="#login">login</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
