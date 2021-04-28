import React from 'react';
import MapContainer from '../maps/MiamiMap'
import NavBar from '../components/NavBar'
import '../components/NavBar.css'

const Miami = () => {
    

    return (
        <div>
            <header>
                HOME
                <NavBar/>
            </header>
            
            <MapContainer />
        </div>
    )
}

export default Miami;