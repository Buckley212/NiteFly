import React from 'react';
import Party from '../resources/party.jpeg';
import Logo from '../resources/logo.png';
import { Link } from 'react-router-dom';
import Places from './Places';
import './style.css';


const Home = () => {
    return (

        <Link to="/miami">
            <article>
                <img className='homeImg' src={Party} alt="party"></img>
                <img className='logo' src={Logo} alt="logo"></img>
                <h2>Miami</h2>
            </article>
        </Link>
    )
}

export default Home;