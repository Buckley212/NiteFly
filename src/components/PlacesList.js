import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlacesList = () => {
    const [locations, setLocations] = useState([])
    useEffect (() => {
    axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.76439676537,-80.20731679740429&radius=1500&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
    .then((response) => {
        console.log(response.data.results);
        setLocations(response.data.results.map(place =>  <section className="Location" key={place.place_id} title={'marker'} >
            <h4>{place.name}</h4>
            <span>{place.vicinity}</span>
        </section>))
        })
    }, []);

    return (
        <div>
            {locations}
        </div>
      );
}

export default PlacesList;