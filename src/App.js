import React from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';

import Home from './components/Home';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/bio' component={Bio} />
      <Route exact path='/skills' component={Skills} />
      <Route path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
