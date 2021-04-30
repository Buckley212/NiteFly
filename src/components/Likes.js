import React, {useState} from 'react';


function Likes() {
    let [like1, setLike1] = useState(4);
    let [like2, setLike2] = useState(20);
    const color = 'white'
    return (
        
        <div className='likes'>
            <div>
                <h5>Did this place satisfy your munchies?</h5>
            </div>
            <div>
                <button className='likesBtn' onClick={() => setLike1(++like1)}>
                    <p style={{color}}>Yum Yum!</p> {like1} 
                </button>
                <button className='likesBtn' onClick={() => setLike2(++like2)}>
                    <p style={{color}}>Hell Nah!</p> {like2} 
                </button>
            </div>
        </div>
    );
}

export default Likes;

