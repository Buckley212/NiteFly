import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlacesList = () => {
    const [locations, setLocations] = useState([])
    const sortByRating = () => {
        let sortedList = [...locations]
        sortedList.sort((a, b) => {
                console.log(typeof a.rating, a)
            return b.props.rating - a.props.rating
            }
        )
        return setLocations(sortedList)
    };
    const sortByName = () => {
        let sortedList1 = [...locations]
        sortedList1.sort((a, b) => {
            return a.props.name.localeCompare(b.props.name)
            }
        )
        return setLocations(sortedList1)
    };
    useEffect(() => {
        axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.76439676537,-80.20731679740429&radius=1500&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
            .then((response) => {
                console.log(response.data.results);
                setLocations(response.data.results.map(place => <section className="Location ani focus" name={place.name} rating={place.rating} key={place.place_id} title={place.name} >
                    <Link to={`/each-place/${place.place_id}`}>
                        <h4>{place.name}</h4>
                    </Link>
                    <span>{place.vicinity}</span>
                    <p>{place.rating}<br />{'★'.repeat(Math.floor(place.rating))}{'☆'.repeat(~(Math.floor(place.rating) - 5) + 1)}</p>
                </section>))
            })
    }, []);
    return (
        <div>
            <button onClick={() => sortByRating()}>Rating</button>
            <button onClick={() => sortByName()}>Name</button>
            {locations}
        </div>
    );
}

export default PlacesList;