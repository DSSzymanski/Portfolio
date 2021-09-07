import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Footer />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
