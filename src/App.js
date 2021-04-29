import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Miami from "./cities/Miami/Miami";
import SanFrancisco from "./cities/SanFrancisco/SanFrancisco";
import NavBar from "./components/NavBar";
import EachPlace from './cities/Miami/EachPlace'
import EachPlaceDallas from './cities/Dallas/EachPlace';
import EachPlaceSF from './cities/SanFrancisco/EachPlace';
import EachPlaceNY from './cities/NewYork/EachPlace';
import Dallas from './cities/Dallas/Dallas';
import NewYork from './cities/NewYork/NewYork';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/miami" component={Miami} />
        <Route exact path="/sanfran" component={SanFrancisco} />
        <Route exact path="/ny" component={NewYork} />
        <Route exact path="/dallas" component={Dallas} />
        <Route exact path='/each-place/:place_id' component={EachPlace} />
        <Route exact path='/each-place-d/:place_id' component={EachPlaceDallas} />
        <Route exact path='/each-place-sf/:place_id' component={EachPlaceSF} />
        <Route exact path='/each-place-ny/:place_id' component={EachPlaceNY} />
      </Switch>
    </div>
  );
}

export default App;
