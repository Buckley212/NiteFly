import React, { useState, useEffect, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyle from '../../maps/mapStyle.json';
import axios from 'axios';
import NavBar from '../../components/NavBar'
import marker from './marker.svg'


const MapContainer = (props) => {
  const [markers, setMarkers] = useState([])
  useEffect(() => {
    axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.76439676537,-80.20731679740429&radius=1500&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
      .then((response) => {
        //setLocations(response.data.results);
        setMarkers(response.data.results.map(place => <Marker className="marker" key={place.place_id} title={place.name} style={mapStyle} icon={marker} name={place.name} position={place.geometry.location} />))
      })
  }, []);

  return (
    <div className="map-container">
    <NavBar/>
    
    <Map
      className='Map'
      google={props.google}
      zoom={14.25}
      draggableCursor='default'
      styles={mapStyle}
      disableDefaultUI={true}
      zoomControl={false}
      scaleControl={false}
      rotateControl={false}
      gestureHandling="none"
      initialCenter={
        {//25.766917437599158, -80.19897262209749
          lat: 25.767917437599158,
          lng: -80.220000000000
        }
      }
    >
      
      {markers}

    </Map>
    </div>
  );

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M',
})(MapContainer);