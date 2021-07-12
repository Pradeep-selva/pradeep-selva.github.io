import React from "react";
import "./index.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Sidenav extends React.Component {
  componentDidMount() {
    M.Modal.init(this.Modal, {});
  }

  render() {
    return (
      <div className='sidenavigation'>
        <ul className='side-nav right'>
          <li>
            <a
              href='https://github.com/Pradeep-selva'
              className='sidenav-elt btn-floating grey darken-3 icons'
              data-tip='GitHub'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='icon fab fa-github'></i>
            </a>
          </li>
          <li>
            <a
              href='/resume.pdf'
              data-target='modal1'
              className='sidenav-elt btn-floating grey darken-3 icons modal-trigger'
              data-tip='Resume'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='icon far fa-file-pdf'></i>
            </a>
          </li>
          <li>
            <a
              href='https://codeforces.com/profile/PradeepSelva'
              className='sidenav-elt btn-floating grey darken-3 icons'
              data-tip='Codeforces'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span
                className='icon iconify'
                data-icon='simple-icons:codeforces'
                data-inline='false'
              ></span>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/pradeep-selva-bb50b519b/'
              className='sidenav-elt btn-floating grey darken-3 icons'
              data-tip='LinkedIn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='icon fab fa-linkedin-in'></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
//href='https://drive.google.com/file/d/1Qy3h6hbjWIF7NwkdjdNRPFXMtd7Z2uAf/view?usp=sharing'
export default Sidenav;
