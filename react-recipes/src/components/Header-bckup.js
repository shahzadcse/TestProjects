import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({children, ...props}) => (
      <NavLink
        exact
        className="p1 my2 black rounded text-decoration-none"
        activeClassName="bg-white"
        {...props}
      >
        {children}
      </NavLink>
);

const Header = () => (
  <header className="flex align-center justify-between px4 my4">
    <h1 className="h1">🍽 My Racipes</h1>
    <nav>
     <HeaderLink to="/" >Home</HeaderLink>
     <HeaderLink to="/favorites" >Favorites</HeaderLink>
     <HeaderLink to="/contact" >Contact</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
