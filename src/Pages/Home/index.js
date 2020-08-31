import React from "react";
import "./index.css";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import { RouteNames } from "../../Configs";
import Sidenav from "../../Components/Sidenav/index";
import Navbar from "../../Components/Navbar/index";
import Foot from "../../Components/Footer/index";
import BottomNav from "../../Components/BottomNav/index";

const Home = () => (
  <div className='home'>
    <Navbar />
    <div className='container'>
      <div className='space'></div>
      <div className='bio'>
        <h1 id='title'>Pradeep Selva</h1>
        <hr></hr>
        <div id='content'>
          <Typist>A passionate hobbyist full-stack web developer.</Typist>
        </div>
      </div>
      <div id='about'>
        <Link to={RouteNames.ABOUT}>About Me</Link>
      </div>
    </div>
    <Sidenav />
    <BottomNav />
    <Foot />
  </div>
);

export default Home;
