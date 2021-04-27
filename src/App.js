import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Miami from './cities/Miami';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/miami' component={Miami} />
    </Switch>
    </div>
  );
}

export default App;
