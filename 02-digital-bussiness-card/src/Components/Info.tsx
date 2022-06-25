import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from '../Images/Profile.jpg';

function Info() {
    return (
        <div className='info'>
            <img src={Profile} alt='Profile' className='profile-image' />
            <h1 className='name'>Ali Maddahi</h1>
            <h3 className='profession'>.Net Developer</h3>
            <h4 className='website'>alimaddahi.ir</h4>
            <button className='email-btn'><i className='bi bi-envelope-fill'></i>Email</button>
        </div>
    );
}

export default Info;