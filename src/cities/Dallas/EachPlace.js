import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../index.css";
import BackButton from '../../components/BackButton'

const EachPlace = ({ match }) => {
	const [places, setPlaces] = useState([]);
	useEffect(() => {
		axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.78711711056142,-96.78982852480252&radius=1500&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
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
			<BackButton />
			<h2 style={{ borderBottom: '2px solid white' }}>{findPlace?.name}</h2>
			<br></br>
			<span style={{ color: "white" }}>Address: {findPlace?.vicinity}</span>
			<br></br>
			<span style={{ color: "white" }}>Rating: {findPlace?.rating} Stars</span>
			<br></br>
			{/* <span>{findPlace?.opening_hours}</span> */}
		</div >
	);
};

export default EachPlace;
