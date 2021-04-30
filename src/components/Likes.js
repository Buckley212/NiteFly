import React, {useState} from 'react';


function Likes() {
    const likes1 = Math.floor(Math.random() * 100);
    const likes2 = Math.floor(Math.random() * 100);

    let [like1, setLike1] = useState(likes1-1);
    let [like2, setLike2] = useState(likes2-1);
    const color = 'white'
    return (
        
        <div className='likes'>
            <div>
                <h5>Did this place satisfy your munchies?</h5>
            </div>
            <div>
                <button className='likesBtn' onClick={() => like1 < likes1 && like2 < likes2?  setLike1(++like1): setLike1(like1)}>
                    <p style={{color}}>Yum Yum!</p> {like1} 
                </button>
                <button className='likesBtn' onClick={() => like2 < likes1 && like1 < likes2 ?  setLike2(++like2): setLike2(like2)}>
                    <p style={{color}}>Hell Nah!</p> {like2} 
                </button>
            </div>
        </div>
    );
}

export default Likes;

