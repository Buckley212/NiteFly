import React from 'react';
import MapContainer from '../maps/MiamiMap'
import NavBar from '../components/NavBar'
import '../components/NavBar.css'
import PlacesList from '../components/PlacesList'

const Miami = () => {
    

    return (
        <div className="mapPage">
            <header className="style-2">
                <PlacesList />
                {/* <NavBar/> */}
            </header>
            
            <MapContainer />
        </div>
    )
}

export default Miami;