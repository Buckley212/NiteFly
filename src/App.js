import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Miami from "./cities/Miami";
import SanFrancisco from "./maps/SanFranciscoMap";
// import NavBar from "./components/NavBar";
// import EachPlace from './components/EachPlace'

function App() {
  return (
    <div className="App">
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
