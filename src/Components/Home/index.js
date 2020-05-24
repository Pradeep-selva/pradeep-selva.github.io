import React from 'react';
import './index.css'
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import Sidenav from '../Sidenav/index';
import Navbar from '../Navbar/index';


const Home = () =>
    <div className="home">
        <Navbar />
        <div className="container">
            <div className="space"></div>
            <div className="bio">
                <h1 id="title">Pradeep Selva</h1>
                <hr></hr>
                <div id="content">
                    <Typist>
                        A passionate hobbyist full-stack web developer.
                    </Typist>
                </div>
            </div>
            <div id="about" className="hide-on-med-and-down">
                <Link to="/About">About Me</Link>
            </div>
        </div>
        <Sidenav />
    </div>


export default Home;