import React from 'react';
import miamiPic from '../resources/miami.png';
import sanFranciscoPic from '../resources/SanFrancisco.png';
import { Link } from 'react-router-dom';
import Places from './Places'

const Home = () =>{
    console.log(Places)
    return (
    <div>  
    <Link to="/miami">
        <article>
            <img src={miamiPic} alt="Miami Beach"></img>
            <h2>Miami</h2>
        </article>
    </Link>
    <Link to="/San Francisco">
        <article>
            <img src={sanFranciscoPic} alt="San Francisco"></img>
            <h2>San Francisco</h2>
        </article>
    </Link>
    <Link to="/miami">
        <article>
            <img src={miamiPic} alt="New York"></img>
            <h2>New York</h2>
        </article>
    </Link>
    </div>  
    
    
    )
}

export default Home;