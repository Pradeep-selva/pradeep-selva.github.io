import React from "react";
import { Switch, Route } from "react-router-dom";
import { RouteNames } from "../Configs";
import Home from "../Components/Home/index";
import Projects from "../Components/Projects/index";
import About from "../Components/About/index";
import AllProjects from "../Components/AllProjects/index";
import Contact from "../Components/Contact/index";

const Routes = () => (
  <Switch>
    <Route exact path={RouteNames.HOME} component={Home} />
    <Route path={RouteNames.PROJECTS} component={Projects} />
    <Route path={RouteNames.ABOUT} component={About} />
    <Route path={RouteNames.ALLPROJECTS} component={AllProjects} />
    <Route path={RouteNames.CONTACT} component={Contact} />
  </Switch>
);

export default Routes;
