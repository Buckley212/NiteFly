import React from 'react';
import Party from '../resources/party.jpeg';
import Logo from '../resources/logo.png';
import { Link } from 'react-router-dom';
import './style.css';


const Home = () => {
    return (
        <div>
            <article>
                <img className='homeImg' src={Party} alt="party"></img>
                <div className="hero">
                <img className='logo' src={Logo} alt="logo"></img>
                <Link to="/miami">
                    <h2>Miami</h2>
                </Link>
                </div>
            </article>
        </div>
    )
}

export default Home;