import React from 'react';
import './index.css'
import Logo from '../../logo.png'

const Navbar = () =>
    <div className="navigation">
        <nav>
            <div class="nav-wrapper">
                <div className="container">
                    <a href="#" className="brand-logo"><img src={Logo}></img></a>
                    <ul id="nav-mobile" className="nav-elts right hide-on-med-and-down">
                        <li><a href="#" className="acc nav-elts">Home</a></li>
                        <li><a href="#" className="nav-elts">Projects</a></li>
                        <li><a href="#" className="nav-elts">Contact</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>

export default Navbar;