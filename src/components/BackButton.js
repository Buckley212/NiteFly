import React from 'react';

function BackButton(props) {
// let leftArrow ='\U+02190';

    return (
        <button className='backBtn'>
            <a href="javascript:history.back()"> ' </a>
        </button>
    );
}

export default BackButton;