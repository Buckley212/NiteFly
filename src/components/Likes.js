import React, {useState} from 'react';


function Likes() {
<<<<<<< HEAD
    let [like1, setLike1] = useState(0);
    let [like2, setLike2] = useState(20);
=======
    const likes1 = (Math.floor(Math.random() * 1000)+1000);
    const likes2 = (Math.floor(Math.random() * 1000)+10);

    let [like1, setLike1] = useState(likes1-1);
    let [like2, setLike2] = useState(likes2-1);
>>>>>>> d5cbc8e8f081c2778837f3db9c7355a704d7a60f
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
                <button className='likesBtn' onClick={() => like2 < likes2 && like1 < likes1?  setLike2(++like2): setLike2(like2)}>
                    <p style={{color}}>Hell Nah!</p> {like2} 
                </button>
            </div>
        </div>
    );
}

export default Likes;

