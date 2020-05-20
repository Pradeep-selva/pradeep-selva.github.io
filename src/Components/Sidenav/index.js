import React from 'react';
import './index.css'

const Sidenav = () =>
    <div className="sidenavigation">
        <ul className="side-nav right hide-on-med-and-down">
            <li>
                <a href="https://github.com/Pradeep-selva" className="sidenav-elt btn-floating grey darken-3 icons"
                    data-tooltip="GitHub">
                    <i className="icon fab fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1nZZ7fS-i2wIIlNiuVm2J6lL95bGOPJwJ/view?usp=sharing"
                    className="sidenav-elt btn-floating grey darken-3 icons" data-tooltip="Curriculum Vitae">
                    <i className="icon far fa-file-pdf"></i>
                </a>
            </li>
            <li>
                <a href="https://codeforces.com/profile/PradeepSelva" className="sidenav-elt btn-floating grey darken-3 icons"
                    data-tooltip="Codeforces">
                    <span className="icon iconify" data-icon="simple-icons:codeforces" data-inline="false"></span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/pradeep-selva-bb50b519b/"
                    className="sidenav-elt btn-floating grey darken-3 icons" data-tooltip="LinkedIn">
                    <i className="icon fab fa-linkedin-in"></i>
                </a>
            </li>
        </ul>
    </div>

export default Sidenav;