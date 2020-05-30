import React from 'react'
import './index.css'

const BottomNav = () =>
    <div className="bottomnav">
        <nav className="b-nav">
            <a href="https://github.com/Pradeep-selva" className="bnav-elt icons"
            >
                <i className="icon fab fa-github"></i>
            </a>
            <a href="https://drive.google.com/file/d/1ImHq8vWA6P5DBED9SPo1wuaoU4XsaXqj/view?usp=sharing"
                className="bnav-elt icons">
                <i className="icon far fa-file-pdf"></i>
            </a>
            <a href="https://codeforces.com/profile/PradeepSelva" id="codeforces" className="bnav-elt icons"
            >
                <span className="icon iconify" data-icon="simple-icons:codeforces" data-inline="false"></span>
            </a>
            <a href="https://www.linkedin.com/in/pradeep-selva-bb50b519b/"
                className="bnav-elt icons">
                <i className="icon fab fa-linkedin-in"></i>
            </a>
        </nav>
    </div>


export default BottomNav;