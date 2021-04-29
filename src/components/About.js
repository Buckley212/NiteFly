import React from 'react';
import AboutBG from '../resources/AboutBG.jpg'

function About() {
    return (
        <div className ='Aboutpg'>
        <img className='aboutImg' src={AboutBG} alt="party"></img>
            <div className='aboutInfo'>
                <h1>About</h1>
                Night Fly is a new startup that targets the late night party people and allows you to find what is open late all the top citys around! 
                Accepting donations at the bitcoin wallet below..
                bc1qws8m9qcz9yh5f0sqv7rlmtnt6ej78zqww9308c
            </div>
        </div>

    );
}

export default About;
