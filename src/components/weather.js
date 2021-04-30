import React, { useEffect, useState } from 'react';
import axios from 'axios';

function weather(props) {

    const [joke, setJoke] = useState([])

    useEffect(() => {
        axios
            .get("https://www.metaweather.com/api/location/2450022/")
            .then((response) => {
                console.log(response.data.value)
                setJoke(response.data.value)
            })
    }, []);
    console.log(joke)


    return (
        <div>

        </div>
    );
}

export default weather;