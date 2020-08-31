import React, { Component } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { RouteNames, navbar } from "../../Configs";
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
                {navbar.map((link) => (
                  <li>
                    <NavLink
                      exact
                      to={link.to}
                      className='nav-elts'
                      activeClassName='active'
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
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
                {navbar.map((link) => (
                  <li>
                    <Link exact to={link.to}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
