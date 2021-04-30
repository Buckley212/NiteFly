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
    const sortByLikes = () => {
        let sortedList3 = [...locations]
        sortedList3.sort((a, b) => {
            return b.props.likes - a.props.likes
            }
        )
        return setLocations(sortedList3)
    };
    useEffect(() => {
        axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.748898693450016,-122.43793300701175&radius=1500&type=bar&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
            .then((response) => {
                console.log(response.data.results);
                setLocations(response.data.results.map(place => {
                    const likesNum = Math.floor(Math.random()*1000)
                    return (
                        <section className="Location ani focus" name={place.name} likes={likesNum} rating={place.rating} key={place.place_id} price={place.price_level} title={place.name} >
                        <Link to={`/each-place-sf/${place.place_id}`}>
                            <h4>{place.name}</h4>
                        </Link>
                        <span>{place.vicinity}</span>
                        <p>{place.rating}<br />{'★'.repeat(Math.floor(place.rating))}{'☆'.repeat(~(Math.floor(place.rating) - 5) + 1)}</p>
                        <p className="price">{'$'.repeat(place.price_level)}</p>
                        <p className="likes">👍  {likesNum}</p>
                    </section>)
                }))
            })
    }, []);
    return (
        <div className = "place-list">
            <div className="buttons">
            <p className="sort">Sort By: </p>
            <button onClick={() => sortByRating()}>Rating</button>
            <button onClick={() => sortByName()}>Name</button>
            <button onClick={() => sortByPrice()}>Price</button>
            <button onClick={() => sortByLikes()}>Likes</button>
            </div>
            {locations}
        </div>
    );
}

export default PlacesList;