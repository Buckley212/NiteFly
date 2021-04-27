import React from 'react';
import miamiPic from '../resources/miami.png';
import { Link } from 'react-router-dom';
import Places from './Places'

const Home = () =>{
    console.log(Places)
    return (
        
    <Link to="/miami">
        <article>
            <img src={miamiPic} alt="Miami Beach"></img>
            <h2>Miami</h2>
        </article>
    </Link>
    )
}

export default Home;