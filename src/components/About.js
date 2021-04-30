import React from 'react';
import AboutBG from '../resources/AboutBG.jpg'
import NavBar from './NavBar';
import '../index.css'

function About() {
    return (

        <div className ='Aboutpg'>
        <NavBar/>
        <img className='aboutImg' src={AboutBG} alt="party"></img>
            <div className='aboutInfo'>
                <h1 clasName='aboutHeader'>About</h1>
                   Night Fly is a new startup that targets the late night party people and allows you to find what is open late all the top citys around! 
                <p>Accepting donations at the bitcoin wallet below..</p>
                <p>bc1qws8m9qcz9yh5f0sqv7rlmtnt6ej78zqww9308c</p>
            </div>
        </div>
        

    );
}

export default About;
