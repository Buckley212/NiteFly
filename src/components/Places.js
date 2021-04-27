import React, { useState, useEffect } from 'react';
import axios from 'axios'







function Places(props) {
  let [locations, setLocations] = useState([])

  
  useEffect (() => {
    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=miami&type=restaurant&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M').then((response) => {setLocations(response.data);
  })
}, []);


  return (
    <div>
      
    </div>
  );
}

export default Places;
