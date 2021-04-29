import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Miami from "./cities/Miami/MiamiMap";
import NavBar from "./components/NavBar";
import EachPlace from './cities/Miami/EachPlace'
import Dallas from './cities/Dallas/Dallas';
import NewYork from './cities/NewYork/NewYork';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/miami" component={Miami} />
        <Route exact path="/sanfran" component={Miami} />
        <Route exact path="/ny" component={NewYork} />
        <Route exact path="/dallas" component={Dallas} />
        <Route exact path='/each-place/:place_id' component={EachPlace} />
      </Switch>
    </div>
  );
}

export default App;
