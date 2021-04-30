import React from 'react';

function BackButton(props) {
    return (
        <div>
            <a href="javascript:history.back()">Go Back</a>
        </div>
    );
}

export default BackButton;