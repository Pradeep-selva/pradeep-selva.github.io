import React from 'react'
import './index.css'

const BottomNav = () =>
    <div className="bottomnav">
        <ul className="b-nav">
            <li>
                <a href="https://github.com/Pradeep-selva" className="grey darken-3 icons"
                >
                    <i className="icon fab fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1ImHq8vWA6P5DBED9SPo1wuaoU4XsaXqj/view?usp=sharing"
                    className="grey darken-3 icons">
                    <i className="icon far fa-file-pdf"></i>
                </a>
            </li>
            <li>
                <a href="https://codeforces.com/profile/PradeepSelva" className="grey darken-3 icons"
                >
                    <span className="icon iconify" data-icon="simple-icons:codeforces" data-inline="false"></span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/pradeep-selva-bb50b519b/"
                    className="grey darken-3 icons">
                    <i className="icon fab fa-linkedin-in"></i>
                </a>
            </li>
        </ul>
    </div>


export default BottomNav;