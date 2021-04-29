import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyle from '../../maps/mapStyle.json';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import marker from './marker.svg'


const MapContainer = (props) => {
    const [markers, setMarkers] = useState([])
    useEffect(() => {
        axios.get('https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7240075270916,-73.99412661354273&radius=1500&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M')
            .then((response) => {
                //setLocations(response.data.results);
                setMarkers(response.data.results.map(place => <Marker className="marker" key={place.place_id} title={'marker'} icon={marker} name={place.name} position={place.geometry.location} />))
            })
    }, []);

    return (
        <div>
        <NavBar/>
        <Map
            className='Map'
            google={props.google}
            zoom={14.2}
            draggableCursor='default'
            styles={mapStyle}
            disableDefaultUI={true}
            zoomControl={false}
            scaleControl={false}
            rotateControl={false}
            gestureHandling="none"
            initialCenter={
                {
                    //40.7240075270916, -73.99412661354273
                    lat: 40.7240075270916,
                    lng: -74.01012661354273
                }
            }
        >
            {markers}

        </Map>
        </div>
    );

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M',
})(MapContainer);