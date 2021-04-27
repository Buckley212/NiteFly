import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyle from './mapStyle.json';


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
            lat: 37.773972,
            lng: -122.431297
          }
        }//25.762672391722948, -80.223313421781
      ><Marker key={place.place_id} title={'The marker`s title will appear as a tooltip.'}
    name={'SFO'} position={{lat: 37.773972, lng: -122.431297}}></Marker></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M',
})(MapContainer);