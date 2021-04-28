import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Miami from './cities/Miami';
import SanFrancisco from './maps/SanFranciscoMap';
import NewYork from './maps/NewYork';
import Dallas from './maps/Dallas';
import NavBar from './components/NavBar';
import './components/NavBar.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/miami' component={Miami} />
        <Route exact path='/sanfran' component={SanFrancisco} />
        <Route exact path='/ny' component={NewYork} />
        <Route exact path='/dallas' component={Dallas} />
      </Switch>
    </div>
  );
}

export default App;
