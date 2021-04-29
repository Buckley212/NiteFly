import axios from 'axios';
import React, { useState, useEffect } from 'react';

function DadJokes() {

    const [joke, setJoke] = useState([])

    useEffect(() => {
        axios
            .get("https://api.chucknorris.io/jokes/random")
            .then((response) => {
                console.log(response.data.value)
                setJoke(response.data.value)
            })
    }, []);
    console.log(joke)


    return (
        <div Style="color:black">
            {joke}
        </div>
    );
}

export default DadJokes;
