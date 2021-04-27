import React from 'react';

function NavBar(props) {
    return (
        <div>
            <Link to ='/Miami'>Miami</Link>
            <Link to ='/San Francisco'>San Francisco</Link>
            <Link to ='/New York'>Home</Link>
        </div>
    );
}

export default NavBar;