import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './css/MayKnow.css';

const MayKnow = () => {
    const urlProfile = 'https://i.redd.it/4erhpdgw2wx81.png';

    return (
        <div className='MayKnow'>
            <h2 className='MayKnowTitle'>People you may know</h2>

            <div className='MayKnowContent'>
                <img className='MayKnowImg' src={urlProfile} alt="profile picture" />
                <div className='MayKnowColumn'>
                    <h3 className='MayKnowName'>Mario Draghi</h3>
                    <p className='MayKnowJob'>Junior Frontend Developer</p>
                    <button className='MayKnowBtn'><i className="bi bi-person-fill-add"></i>Connect</button>
                </div>
            </div>
            <div className='MayKnowContent'>
                <img className='MayKnowImg' src={urlProfile} alt="profile picture" />
                <div className='MayKnowColumn'>
                    <h3 className='MayKnowName'>Mario Draghi</h3>
                    <p className='MayKnowJob'>Junior Frontend Developer</p>
                    <button className='MayKnowBtn'><i className="bi bi-person-fill-add"></i>Connect</button>
                </div>
            </div>

            <p className='MayKnowShow'>Show all</p>
        </div>
    );
}

export default MayKnow;
