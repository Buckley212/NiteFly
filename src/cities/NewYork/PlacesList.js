import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlacesList = () => {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7240075270916,-73.99412661354273&radius=1500&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
            .then((response) => {
                console.log(response.data.results);
                setLocations(response.data.results.map(place => <section className="Location ani focus" key={place.place_id} title={'marker'} >
                    <Link to={`/each-place-ny/${place.place_id}`}>
                        <h4>{place.name}</h4>
                    </Link>
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