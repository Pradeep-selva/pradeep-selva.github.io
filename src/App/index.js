import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Routes from "../Routes";

const App = () => (
  <div className='App'>
    <Router>
      <div className='App-class'>
        <Routes />
      </div>
    </Router>
  </div>
);

export default App;
