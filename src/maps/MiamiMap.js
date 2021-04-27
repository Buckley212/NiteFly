import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import mapStyle from './mapStyle.json';

const mapStyles = {
  width: '100vw',
  height: '100vh'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        mapIds='308c9aa319ce8e2'
        styles={mapStyle}
        disableDefaultUI = {true}
        zoomControl = {false}
        scaleControl = {false}
        rotateControl = {false}
        gestureHandling = "none"
        initialCenter={
          {
            lat: 25.76439676537,
            lng: -80.20731679740429
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwCvDK-KdF-C-eDXIjNOha9BWAimiw18w',
  mapId: '308c9aa319ce8e2'
})(MapContainer);