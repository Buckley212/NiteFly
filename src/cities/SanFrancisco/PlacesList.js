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
    const sortByPrice = () => {
        let sortedList2 = [...locations]
        sortedList2.sort((a, b) => {
            return a.props.price - b.props.price
            }
        )
        return setLocations(sortedList2)
    };
    useEffect(() => {
        axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.748898693450016,-122.43793300701175&radius=1500&type=bar&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
            .then((response) => {
                console.log(response.data.results);
                setLocations(response.data.results.map(place => <section className="Location ani focus" name={place.name} rating={place.rating} price={place.price_level} key={place.place_id} title={place.name} >
                    <Link to={`/each-place/${place.place_id}`}>
                        <h4>{place.name}</h4>
                    </Link>
                    <span>{place.vicinity}</span>
                    <p>{place.rating}<br />{'★'.repeat(Math.floor(place.rating))}{'☆'.repeat(~(Math.floor(place.rating) - 5) + 1)}</p>
                    <p className="price">{'$'.repeat(place.price_level)}</p>
                </section>))
            })
    }, []);
    return (
        <div className = "place-list">
            <div className="buttons">
            <p className="sort">Sort By: </p>
            <button onClick={() => sortByRating()}>Rating</button>
            <button onClick={() => sortByName()}>Name</button>
            <button onClick={() => sortByPrice()}>Price</button>
            </div>
            {locations}
        </div>
    );
}

export default PlacesList;