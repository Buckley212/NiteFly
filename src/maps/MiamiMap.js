import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import mapStyle from './mapStyle.json';
import Markers from '../components/Markers';



export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        styles={mapStyle}
        // disableDefaultUI = {true}
        // zoomControl = {false}
        // scaleControl = {false}
        // rotateControl = {false}
        // gestureHandling = "none"
        initialCenter={
          {
            lat: 25.76439676537,
            lng: -80.20731679740429
          }
        }
      ><Markers/></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M',
})(MapContainer);