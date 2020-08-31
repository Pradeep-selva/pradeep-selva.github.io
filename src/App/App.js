import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Home from "../Components/Home/index";
import Projects from "../Components/Projects/index";
import About from "../Components/About/index";
import AllProjects from "../Components/AllProjects/index";
import Contact from "../Components/Contact/index";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div className='App-class'>
            <Route exact path='/' component={Home} />
            <Route path='/Projects' component={Projects} />
            <Route path='/About' component={About} />
            <Route path='/AllProjects' component={AllProjects} />
            <Route path='/Contact' component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
