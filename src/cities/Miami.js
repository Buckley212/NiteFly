import React from 'react';
import MapContainer from '../maps/MiamiMap';
import NavBar from '../components/NavBar';
import PlacesList from '../components/PlacesList';
import loadImage from '../resources/full-moon-and-clouds-svgrepo-com (1).svg'

const Miami = () => {
    

    return (
        <div className="mapPage">
            <header className="style-2">
                <PlacesList />
                {/* <NavBar/> */}
            </header>
            
            <MapContainer />
            <div className="load-screen left">
                <img  src={loadImage}/>
            </div>
        </div>
    )
}

export default Miami;