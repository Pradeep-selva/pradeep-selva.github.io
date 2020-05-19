import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/index'
import Projects from '../Projects/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
