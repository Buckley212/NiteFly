import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Miami from './cities/Miami';
import NavBar from './components/NavBar';
import './components/NavBar.css';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/miami' component={Miami} />
    </Switch>
    </div>
  );
}

export default App;
