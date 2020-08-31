import React, { Component } from "react";
import classNames from "classnames";
import { fadeInUp, fadeInDown } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import "./index.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "../Navbar/index";
import "react-medium-image-zoom/dist/styles.css";
import { Project } from "../../Shared";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouteNames } from "../../Configs";
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
            <div className='col s12 m4 l4'>
              <div className={cardStyle}>
                <div className='card-image'>
                  <img
                    src={Project.yelp}
                    alt='yelp'
                    className='z-depth-3 responsive-img materialboxed'
                    id='yelp'
                  />
                  <span className='card-title' id='weather'>
                    Yelp Camp
                  </span>
                  <a
                    href='https://github.com/Pradeep-selva/YelpCamp'
                    className='pulse btn-floating halfway-fab waves-effect waves-light blue-grey darken-1'
                  >
                    <i className='material-icons'>developer_mode</i>
                  </a>
                </div>
                <div className='card-content'>
                  <p>
                    This is a website that allows you to browse through
                    campgrounds registered by users.You can create, read, update
                    and delete (CRUD) from the application. This application
                    follows REST-ful routing.
                  </p>
                </div>
              </div>
            </div>

            <div className='col s12 m4 l4'>
              <div className={cardStyle}>
                <div className='card-image'>
                  <img
                    src={Project.connecsoc}
                    alt='connecsoc'
                    className='z-depth-3 responsive-img materialboxed'
                  />
                  <span className='card-title' id='weather'>
                    Connecsoc
                  </span>
                  <a
                    href='https://github.com/Pradeep-selva/connecsoc'
                    className='pulse btn-floating halfway-fab waves-effect waves-light blue-grey darken-1'
                  >
                    <i className='material-icons'>developer_mode</i>
                  </a>
                </div>
                <div className='card-content'>
                  <p>
                    A social media website powered by react, redux, firebase and
                    typescript. Join the site, make an account and post things
                    for the rest of the users to see.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className='col s12 m4 l4'>
              <div className={cardStyle}>
                <div className='card-image'>
                  <img
                    src={Project.arcadia}
                    alt='pong'
                    className='z-depth-3 responsive-img materialboxed'
                  />
                  <span className='card-title' id='weather'>
                    Arcadia discord bot
                  </span>
                  <a
                    href='https://github.com/Pradeep-selva/Arcadia-Bot'
                    className='pulse btn-floating halfway-fab waves-effect waves-light blue-grey darken-1'
                  >
                    <i className='material-icons'>developer_mode</i>
                  </a>
                </div>
                <div className='card-content'>
                  <p>
                    A server specific general purpose discord bot built with
                    discord.py that has a userbase of over 1k people.
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col s12 m4 l4'>
              <div className={cardStyle}>
                <div className='card-image'>
                  <img
                    src={Project.hackerNews}
                    alt='hacker-news'
                    className='z-depth-3 responsive-img materialboxed'
                  />
                  <span className='card-title' id='weather'>
                    Hacker News Clone
                  </span>
                  <a
                    href='https://github.com/Pradeep-selva/hacker-news-clone'
                    className='pulse btn-floating halfway-fab waves-effect waves-light blue-grey darken-1'
                  >
                    <i className='material-icons'>developer_mode</i>
                  </a>
                </div>
                <div className='card-content'>
                  <p>
                    A web app built using React that can be used to fetch and
                    read tech related news from over the internet.
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className='col s12 m4 l4'>
              <div className={cardStyle}>
                <div className='card-image'>
                  <img
                    src={Project.facedetect}
                    alt='face-detect'
                    className='z-depth-3 responsive-img materialboxed'
                  />
                  <span className='card-title'>Face And Eye Detector</span>
                  <a
                    href='https://github.com/Pradeep-selva/Face-and-eye-detector'
                    className='pulse btn-floating halfway-fab waves-effect waves-light blue-grey darken-1'
                  >
                    <i className='material-icons'>developer_mode</i>
                  </a>
                </div>
                <div className='card-content'>
                  <p>
                    A program that can detect eyes and face from input provided
                    by webcam in real time built using the OpenCV library of
                    Python3.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className='col s12 m4 l4'>
              <div className={cardStyle}>
                <div className='card-image'>
                  <img
                    src={Project.pokemon}
                    alt='pokemon'
                    className='z-depth-3 responsive-img materialboxed'
                  />
                  <span className='card-title' id='weather'>
                    Tensorflow Pokemon Predictor
                  </span>
                  <a
                    href='https://github.com/Pradeep-selva/TensorFlow-Pokemon-Predictor'
                    className='pulse btn-floating halfway-fab waves-effect waves-light blue-grey darken-1'
                  >
                    <i className='material-icons'>developer_mode</i>
                  </a>
                </div>
                <div className='card-content'>
                  <p>
                    This is a machine learning program built using Tensorflow to
                    predict whether a given pokemon is legendary or not.
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
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
