import React, { Component } from 'react'
import Navbar from '../Navbar/index'
import Avatar from '../../img/avatar.jpg'
import './index.css'
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import { fadeInUp, fadeInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import XpChart from '../XpChart/index'
import InfoCard from '../InfoCard/index'
import classNames from 'classnames';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'


const styles = StyleSheet.create({
    fadeInUp: {
        animationName: fadeInUp,
        animationDuration: '1.5s'
    },
    fadeInDown: {
        animationName: fadeInDown,
        animationDuration: '1.5s'
    }
})

const avatar_section = classNames('col s12 l2', css(styles.fadeInUp))
const about_section = classNames('col s12 l4 offset-l1', css(styles.fadeInDown))
const skills_section = classNames('col s12 l3 offset-l2', css(styles.fadeInUp))


class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gh: {},
            cf: {},
            error: '',
            curTitle: "Codeforces",
            isMounted: false
        }

        this.fetchCf = this.fetchCf.bind(this)
        this.fetchGh = this.fetchGh.bind(this)
        this.setCf = this.setCf.bind(this)
        this.setGh = this.setGh.bind(this)
        this.handleCf = this.handleCf.bind(this)
        this.handleGh = this.handleGh.bind(this)
    }

    handleCf() {
        this.setState({
            curTitle: 'Codeforces',
        })
    }

    handleGh() {
        this.setState({
            curTitle: 'GitHub',
        })
    }

    fetchCf() {
        this.setState({ isLoaded: false })
        axios('https://codeforces.com/api/user.info?handles=PradeepSelva')
            .then(response => this.setCf(response.data))
            .catch(error => this.setState({
                error
            }))
    }

    fetchGh() {
        this.setState({ isLoaded: false })
        axios('https://api.github.com/users/Pradeep-selva')
            .then(response => this.setGh(response.data))
            .catch(error => this.setState({
                error
            }))
    }

    setCf(cf) {
        this.setState({
            cf: cf.result[0],
        })
    }

    setGh(gh) {
        this.setState({
            gh: gh,
        })
    }

    componentDidMount() {
        let materialBox = document.querySelectorAll('.materialboxed');
        M.AutoInit()
        M.Materialbox.init(materialBox, {});
        AOS.init({
            duration: 1000
        })
        this.fetchCf()
        this.fetchGh()
        this.setState({
            isMounted: true
        })
        // window.location.reload(f)
    }

    render() {
        const {
            cf,
            gh,
            curTitle
        } = this.state
        return (
            <div className="Abouts">
                <Navbar />
                <section class="container section" id="about">
                    <div class="row">
                        <div class={avatar_section}>
                            <div class="valign-wrapper">
                                <img src={Avatar} alt="avatar" class="materialboxed responsive rounded" />
                            </div>

                        </div>
                        <div class={about_section}>
                            <h3 class="grey-text text-darken-4">-About Me-</h3>
                            <blockquote>
                                <p class="flow-text grey-text text-darken-4">
                                    Im an 18 year old college student, doing a Computer Science
                                    Engineering Degree and I'm passionate about learning and developing
                                    new things.
                                </p>
                            </blockquote>
                        </div>
                        <div class={skills_section}>
                            <h3 class="grey-text text-darken-4">-Skills-</h3>
                            <ul class="flow-text grey-text text-darken-4" id="skills">
                                <li>○ Python</li>
                                <li>○ Javascript</li>
                                <li>○ C++</li>
                                <li>○ Java</li>
                                <li>○ HTML</li>
                                <li>○ CSS</li>
                                <li>○ Selenium Automation</li>
                                <li>○ MongoDB</li>
                                <li>○ Firebase</li>
                                <li>○ Bootstrap</li>
                                <li>○ jQuery</li>
                                <li>○ Materialize CSS</li>
                                <li>○ Node.js</li>
                                <li>○ Tensorflow</li>
                                <li>○ Keras</li>

                            </ul>
                        </div>
                    </div>
                    <hr className="style"></hr>
                    <div data-aos="fade-up" className="chart-radar">
                        <h3 class="grey-text text-darken-4">-Proficiency-</h3>
                        <XpChart />
                    </div>
                    <hr className="style"></hr>
                    <div data-aos="fade-up" className="infocard">
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