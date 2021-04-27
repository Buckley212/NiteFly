import React from 'react';
import Party from '../resources/party.jpeg';
import Logo from '../resources/logo.png';
import { Link } from 'react-router-dom';
// import Places from './Places';
import './style.css';


const Home = () => {
    return (

        <Link to="/miami">
            <article>

                <img className='homeImg' src={Party} alt="party"></img>

                <div className='flex'>
                    <div><img className='logo' src={Logo} alt="logo"></img></div>
                    <div><h2>Miami</h2></div>
                    <div><h2>New York</h2></div>
                    <div><h2>Los Angeles</h2></div>
                    <div><h2>Dallas</h2></div>

                </div>
            </article>
        </Link>
    )
}

export default Home;