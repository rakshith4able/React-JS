import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <NavLink exact to="/" activeClassName="Navbar-active">Home</NavLink>
                <NavLink exact to="/about" activeClassName="Navbar-active">About</NavLink>
                <NavLink exact to="/contact" activeClassName="Navbar-active">Contact</NavLink>
            </nav>
        );
    }
}

export default Navbar;