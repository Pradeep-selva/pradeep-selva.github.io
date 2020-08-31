import React, { Component } from "react";
import classNames from "classnames";
import { fadeInUp, fadeInDown } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import "./index.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Navbar } from "../../Components";
import "react-medium-image-zoom/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouteNames, projects } from "../../Configs";
import { Link } from "react-router-dom";

const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "1s"
  },
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: "1s"
  }
});

const cardStyle = classNames("card", css(styles.fadeInUp));

class Projects extends Component {
  componentDidMount() {
    let materialBox = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(materialBox, {});
    AOS.init({
      duration: 1000
    });
  }

  render() {
    return (
      <div className='projects'>
        <Navbar />
        <div className={css(styles.fadeInDown)}>
          <h1>Projects</h1>
        </div>
        <section className='container section' id='projects'>
          <div className='row'>
            {projects.map((project) => (
              <div className='col s12 m4 l4'>
                <div className={cardStyle}>
                  <div className='card-image'>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className='z-depth-3 responsive-img materialboxed'
                      id={project.id && "yelp"}
                    />
                    <span
                      className='card-title'
                      id={!project.whiteText && "weather"}
                    >
                      {project.title}
                    </span>
                    <a
                      href={project.repoLink}
                      className='pulse btn-floating halfway-fab waves-effect waves-light blue-grey darken-1'
                    >
                      <i className='material-icons'>developer_mode</i>
                    </a>
                  </div>
                  <div className='card-content'>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className='More'>
          <Link to={RouteNames.ALLPROJECTS}>View All</Link>
          <p>&nbsp;</p>
        </div>
      </div>
    );
  }
}

export default Projects;
