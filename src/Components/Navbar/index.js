import React, { Component } from 'react';
import './index.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import Avatar from '../../img/avatar.jpg'


class Navbar extends Component {

    componentDidMount() {
        let sidenav = document.querySelector('#mobile-menu');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        return (
            <div className="navigation">
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                            <a href="" className="sidenav-trigger" data-target="mobile-menu">
                                <i id="hamburger" className="material-icons">menu</i>
                            </a>
                            <Link to="/" className="brand-logo"><img src={Logo}></img></Link>
                            <ul id="nav-mobile" className="nav-elts right hide-on-med-and-down">
                                <li><NavLink
                                    exact to="/"
                                    className="nav-elts"
                                    activeClassName="active">
                                    Home
                            </NavLink></li>
                                <li><NavLink
                                    to="/About"
                                    className="nav-elts"
                                    activeClassName="active">
                                    About
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
                            <ul className="sidenav grey lighten-2" id="mobile-menu">
                                <li><div className="user-view">
                                    <Link to="/About"><img className="circle" src={Avatar} /></Link>
                                    <Link to="/About"><span className="black-text text-lighten-2 name">Pradeep Selva</span></Link>
                                    <Link to="/Contact"><span className="black-text text-lighten-2 email">pradeepselvaraju@gmail.com</span></Link>
                                </div> </li>
                                <li><Link exact to="/" to="/">Home</Link></li>
                                <li><Link to="/Projects">Projects</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>

                                <li>
                                    <a href="https://drive.google.com/file/d/1ImHq8vWA6P5DBED9SPo1wuaoU4XsaXqj/view?usp=sharing">Curriculum
                                      Vitae
                            </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Navbar;