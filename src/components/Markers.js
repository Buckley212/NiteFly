import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Marker } from 'google-maps-react'

const Markers = () => {

    const [locations, setLocations] = useState([])
      
    useEffect (() => {
        axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=miami&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
        .then((response) => {
            setLocations(response.data.results);
    })
    }, []);

    console.log(locations)
    return (
        locations.map(place => {
            return (
                <Marker title={place.name}
                //place.geometry.location.lat
                position={{lat:place.geometry.location.lat, lng: place.geometry.location.lng} }></Marker>)
        })
    )
}

export default Markers;