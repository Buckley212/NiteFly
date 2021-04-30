import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../index.css";
import BackButton from '../../components/BackButton'


const EachPlace = ({ match }) => {
	const [places, setPlaces] = useState([]);
	useEffect(() => {
		axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7240075270916,-73.99412661354273&radius=1500&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
			.then((response) => {
				//setLocations(response.data.results);
				console.log(response.data.results);
				setPlaces(response.data.results);
			});
	}, []);

	const findPlace = places.find((place) => {
		return place.place_id === match.params.place_id;
	});

	return (
		<div className="selected">
			<BackButton/>
			<h2>{findPlace?.name}</h2>
			<span>{findPlace?.vicinity}</span>
		</div>
	);
};

export default EachPlace;
