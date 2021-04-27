import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyle from './mapStyle.json';

const mapStyles = {
  width: '100vw',
  height: '90vh'
};

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
        }//25.762672391722948, -80.223313421781
      ><Marker title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'} position={{lat: 25.762672391722948, lng: -80.223313421781}}></Marker></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M',
})(MapContainer);