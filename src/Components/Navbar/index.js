import React, { Component } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { RouteNames } from "../../Configs";
import { Images } from "../../Shared";

class Navbar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#mobile-menu");
    M.Sidenav.init(sidenav, {
      closeOnClick: true,
      draggable: true
    });
  }

  render() {
    return (
      <div className='navigation'>
        <nav>
          <div className='nav-wrapper'>
            <div className='container'>
              <a
                href='/#'
                className='sidenav-trigger'
                data-target='mobile-menu'
              >
                <i id='hamburger' className='material-icons'>
                  menu
                </i>
              </a>
              <Link to='/' className='brand-logo'>
                <img src={Images.logo} alt='logo'></img>
              </Link>
              <ul
                id='nav-mobile'
                className='nav-elts right hide-on-med-and-down'
              >
                <li>
                  <NavLink
                    exact
                    to={RouteNames.HOME}
                    className='nav-elts'
                    activeClassName='active'
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={RouteNames.ABOUT}
                    className='nav-elts'
                    activeClassName='active'
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={RouteNames.PROJECTS}
                    className='nav-elts'
                    activeClassName='active'
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={RouteNames.CONTACT}
                    className='nav-elts'
                    activeClassName='active'
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <ul
                className='sidenav sidenav-close grey lighten-2'
                id='mobile-menu'
              >
                <li>
                  <div className='user-view'>
                    <div class='background'>
                      <img src={Images.sidenavBg} alt='sidenav background' />
                    </div>
                    <Link to={RouteNames.About}>
                      <img
                        className='circle z-depth-5'
                        src={Images.avatar}
                        alt='avatar'
                      />
                    </Link>
                    <Link to={RouteNames.About}>
                      <span className='white-text text-lighten-2 name'>
                        Pradeep Selva
                      </span>
                    </Link>
                  </div>{" "}
                </li>
                <li>
                  <Link exact to={RouteNames.HOME}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={RouteNames.PROJECTS}>Projects</Link>
                </li>
                <li>
                  <Link to={RouteNames.ABOUT}>About</Link>
                </li>
                <li>
                  <Link to={RouteNames.CONTACT}>Contact</Link>
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
