import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png';

const Navbar = () =>
    <div className="navigation">
        <nav>
            <div class="nav-wrapper">
                <div className="container">
                    <a href="#" className="brand-logo"><img src={Logo}></img></a>
                    <ul id="nav-mobile" className="nav-elts right hide-on-med-and-down">
                        <li><NavLink
                            exact to="/"
                            className="nav-elts"
                            activeClassName="active">
                            Home
                            </NavLink></li>
                        <li><NavLink
                            to="/Projects"
                            className="nav-elts"
                            activeClassName="active">
                            Projects
                            </NavLink></li>
                        <li><NavLink
                            to="/Contact"
                            className="nav-elts"
                            activeClassName="active">
                            Contact
                            </NavLink></li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>

export default Navbar;