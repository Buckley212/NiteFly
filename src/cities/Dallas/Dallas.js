import React from "react";
import MapContainer from "./DallasMap";
import PlacesList from "./PlacesList";
import loadImage from "../../resources/full-moon-and-clouds-svgrepo-com (1).svg";

const Dallas = (props) => {
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

export default Dallas;
