import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Marker } from 'google-maps-react';

const Markers = (props) => {

    let [locations, setLocations] = useState([])
      
    useEffect (() => {
      axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.76439676537,-80.20731679740429&radius=1500&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
      .then((response) => {
        setLocations(response.data.results);
        })
    }, []);

    console.log(locations)

    const showLocations = () => {
        return locations.map(place => {
            return (
            <Marker key={place.place_id} title={'marker'} name={place.name} position={place.geometry.location}/>)
        })
    };
    return ( 
        <div className="markers">
            {showLocations()}
        </div>
    )
}

export default Markers;