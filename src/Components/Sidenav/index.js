import React from 'react';
import './index.css'
import ReactTooltip from 'react-tooltip'

const Sidenav = () =>
    <div className="sidenavigation">
        <ul className="side-nav right">
            <li>
                <a href="https://github.com/Pradeep-selva" className="sidenav-elt btn-floating grey darken-3 icons"
                    data-tip="GitHub">
                    <i className="icon fab fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1Qy3h6hbjWIF7NwkdjdNRPFXMtd7Z2uAf/view?usp=sharing"
                    className="sidenav-elt btn-floating grey darken-3 icons" data-tip="Curriculum Vitae">
                    <i className="icon far fa-file-pdf"></i>
                </a>
            </li>
            <li>
                <a href="https://codeforces.com/profile/PradeepSelva" className="sidenav-elt btn-floating grey darken-3 icons"
                    data-tip="Codeforces">
                    <span className="icon iconify" data-icon="simple-icons:codeforces" data-inline="false"></span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/pradeep-selva-bb50b519b/"
                    className="sidenav-elt btn-floating grey darken-3 icons" data-tip="LinkedIn">
                    <i className="icon fab fa-linkedin-in"></i>
                </a>
            </li>
        </ul>
        <ReactTooltip
            place="left"
        />
    </div>


export default Sidenav;