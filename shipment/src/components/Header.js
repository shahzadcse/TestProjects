import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({ children, ...props }) => (
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
    <header  className="flex px4 item-center justify-between">
        <h1 className="red">Shipment Tracker</h1>
        <nav>
            
            <HeaderLink to='/' >Home</HeaderLink>   
            <HeaderLink to='/shipments' >Shipment Details</HeaderLink>
            <HeaderLink to='/contact' >Contact</HeaderLink>
             
        </nav>

    </header>
)

HeaderLink.propTypes = {
    children: PropTypes.node,
};
  

export default Header;
