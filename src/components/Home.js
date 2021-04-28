import React from 'react';
// import miamiPic from '../resources/miami.png';
// import sanFranciscoPic from '../resources/SanFrancisco.png';
import Party from '../resources/party.jpeg';
import Logo from '../resources/logo.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <article>
                <img className='homeImg' src={Party} alt="party"></img>
                <div className="hero">
                    <img className='logo' src={Logo} alt="logo"></img>
                    <Link className='linkColor middle' to="/miami">
                        <h2>Miami</h2>
                    </Link>
                    <Link className='linkColor middle' to="/sanfran">
                        <h2>San Francisco</h2>
                    </Link>
                    <Link className='linkColor middle' to="/ny">
                        <h2>New York</h2>
                    </Link>
                    <Link className='linkColor middle' to="/dallas">
                        <h2>Dallas</h2>
                    </Link>
                </div>
            </article>
        </div>
    )
}

export default Home;