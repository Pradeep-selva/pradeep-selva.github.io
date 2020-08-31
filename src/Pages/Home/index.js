import React from "react";
import "./index.css";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import { RouteNames } from "../../Configs";
import { Sidenav, Navbar, Footer, BottomNav } from "../../Components";

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
    <Footer />
  </div>
);

export default Home;
