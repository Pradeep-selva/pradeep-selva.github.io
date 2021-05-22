import React, { Component } from "react";
import { Images } from "../../Shared";
import "./index.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { fadeInUp, fadeInDown } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { XpChart, Navbar, InfoCard } from "../../Components";
import classNames from "classnames";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { getAboutContent } from "../../Api";
import { STATUS_SUCCESS } from "../../Configs";

const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "1.5s"
  },
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: "1.5s"
  }
});

const avatar_section = classNames("col s12 l2", css(styles.fadeInUp));
const about_section = classNames(
  "col s12 l4 offset-l1",
  css(styles.fadeInDown)
);
const skills_section = classNames("col s12 l3 offset-l2", css(styles.fadeInUp));

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gh: {},
      cf: {},
      error: "",
      curTitle: "Codeforces",
      isMounted: false,
      description: "",
      skills: []
    };

    this.fetchCf = this.fetchCf.bind(this);
    this.fetchGh = this.fetchGh.bind(this);
    this.setCf = this.setCf.bind(this);
    this.setGh = this.setGh.bind(this);
    this.handleCf = this.handleCf.bind(this);
    this.handleGh = this.handleGh.bind(this);
  }

  handleCf() {
    this.setState({
      curTitle: "Codeforces"
    });
  }

  handleGh() {
    this.setState({
      curTitle: "GitHub"
    });
  }

  fetchAbout = () => {
    getAboutContent()
      .then(({ data: { description, skills }, statusCode }) => {
        if (statusCode === STATUS_SUCCESS) {
          this.setState({ description, skills });
        }
      })
      .catch(console.log);
  };

  fetchCf() {
    this.setState({ isLoaded: false });
    axios("https://codeforces.com/api/user.info?handles=PradeepSelva")
      .then((response) => this.setCf(response.data))
      .catch((error) =>
        this.setState({
          error
        })
      );
  }

  fetchGh() {
    this.setState({ isLoaded: false });
    axios("https://api.github.com/users/Pradeep-selva")
      .then((response) => this.setGh(response.data))
      .catch((error) =>
        this.setState({
          error
        })
      );
  }

  setCf(cf) {
    this.setState({
      cf: cf.result[0]
    });
  }

  setGh(gh) {
    this.setState({
      gh: gh
    });
  }

  componentDidMount() {
    let materialBox = document.querySelectorAll(".materialboxed");
    M.AutoInit();
    M.Materialbox.init(materialBox, {});
    AOS.init({
      duration: 1000
    });
    this.fetchCf();
    this.fetchGh();
    this.fetchAbout();
    this.setState({
      isMounted: true
    });
  }

  render() {
    const { cf, gh, curTitle, description, skills } = this.state;
    return (
      <div className='Abouts'>
        <Navbar />
        <section class='container section' id='about'>
          <div class='row'>
            <div class={avatar_section}>
              <div class='valign-wrapper'>
                <img
                  src={Images.avatar}
                  alt='avatar'
                  class='materialboxed responsive rounded'
                />
              </div>
            </div>
            <div class={about_section}>
              <h3 class='grey-text text-darken-4'>-About Me-</h3>
              <blockquote>
                <p
                  class='flow-text grey-text text-darken-4'
                  style={{ textAlign: "left" }}
                >
                  {description}
                </p>
              </blockquote>
            </div>
            <div class={skills_section}>
              <h3 class='grey-text text-darken-4'>-Skills-</h3>
              <ul class='flow-text grey-text text-darken-4' id='skills'>
                {skills.map((skill) => (
                  <li>○ {skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr className='style'></hr>
          <div data-aos='fade-up' className='chart-radar'>
            <h3 class='grey-text text-darken-4'>-Proficiency-</h3>
            <XpChart />
          </div>
          <hr className='style'></hr>
          <div data-aos='fade-up' className='infocard'>
            <h3>-More Info-</h3>
            <InfoCard
              cf={cf}
              gh={gh}
              clickCf={this.handleCf}
              clickGh={this.handleGh}
              curTitle={curTitle}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default About;
