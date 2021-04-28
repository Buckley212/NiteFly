import React, { useState, useEffect, Component } from "react";
import axios from "axios";

const EachPlace = (props) => {
	const [places, setPlaces] = useState([]);
	useEffect(() => {
		axios.get("https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.76439676537,-80.20731679740429&radius=1500&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M")
			.then((response) => {
				//setLocations(response.data.results);
				console.log(response.data.results)
				setPlaces(response.data.results);
			});
	}, []);

	const findPlace = places.find((place) => {
		return place.place_id === props.match.params.place_id;
	});


	return (
		<div className="selected">
			{/* <h2>{findPlace.name}</h2> */}
		</div>
	);
};

export default EachPlace;
