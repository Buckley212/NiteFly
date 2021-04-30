import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../index.css";
import BackButton from '../../components/BackButton'
import Likes from '../../components/Likes'

const EachPlace = ({ match }) => {
	const [places, setPlaces] = useState([]);
	useEffect(() => {
		axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.748898693450016,-122.43793300701175&radius=1500&type=bar&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
			.then((response) => {
				//setLocations(response.data.results);
				console.log(response.data.results);
				setPlaces(response.data.results);
			});
	}, []);
	console.log(match);
	const findPlace = places.find((place) => {
		return place.place_id === match.params.place_id;
	});
	console.log(findPlace)
	return (
		<div className="selected">
			<BackButton />
			<h2 style={{ borderBottom: '2px solid white' }}>{findPlace?.name}</h2>
			<br></br>
			<span style={{ color: "white" }}>Address: {findPlace?.vicinity}</span>
			<br></br>
			<span style={{ color: "white" }}>Rating: {findPlace?.rating} Stars</span>
			<br></br>
			<Likes/>
		</div>
	);
};


export default EachPlace;
