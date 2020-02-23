import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import face from './face.png'

const Logo = () => {
    return (
        <div className='center ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"> <img src={face} alt='Logo'></img> </div>
            </Tilt>
        </div>
    )
}

export default Logo