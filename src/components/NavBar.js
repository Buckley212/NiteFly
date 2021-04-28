import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'; 

function NavBar() {
    return (
        <div>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <Link className='linkColor' to="/miami">
                            <h4>Miami</h4>
                        </Link>
                        <Link className='linkColor' to="/sanfran">
                            <h4>San Francisco</h4>
                        </Link>
                        <Link className='linkColor' to="/ny">
                            <h4>New York</h4>
                        </Link>
                        <Link className='linkColor' to="/dallas">
                            <h4>Dallas</h4>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;