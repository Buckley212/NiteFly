import React from 'react';
import miamiPic from '../resources/miami.png';
// import sanFranciscoPic from '../resources/SanFrancisco.png';
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
                    <Link className='linkColor' to="/miami">
                        <h2>Miami</h2>
                    </Link>
                    <Link className='linkColor' to="/">
                        <h2>Los Angeles</h2>
                    </Link>
                    <Link className='linkColor' to="/">
                        <h2>New York</h2>
                    </Link>
                    <Link className='linkColor' to="/">
                        <h2>Dallas</h2>
                    </Link>
                </div>
            </article>
        </div>
    )
}

export default Home;