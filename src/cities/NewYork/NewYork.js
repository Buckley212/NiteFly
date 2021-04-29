import React from "react";
import MapContainer from "./NewYorkMap";
import PlacesList from "./PlacesList";
import loadImage from "../../resources/full-moon-and-clouds-svgrepo-com (1).svg";

const NewYork = (props) => {
	return (
		<div className="mapPage">
			<header className="style-2">
				<PlacesList />
			</header>

			<MapContainer {...props} />
			<div className="load-screen left">
				<img src={loadImage} />
			</div>
		</div>
	);
};

export default NewYork;
