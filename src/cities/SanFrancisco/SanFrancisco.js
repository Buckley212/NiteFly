import React from "react";
import MapContainer from "./SanFranciscoMap";
import NavBar from "../../components/NavBar";
import PlacesList from "./PlacesList";
import loadImage from "../../resources/full-moon-and-clouds-svgrepo-com (1).svg";

const SanFrancisco = () => {
	return (
		<div className="mapPage">
			<header className="style-2">
				<PlacesList />
			</header>

			<MapContainer />
			<div className="load-screen left">
				<img src={loadImage} />
			</div>
		</div>
	);
};

export default SanFrancisco;