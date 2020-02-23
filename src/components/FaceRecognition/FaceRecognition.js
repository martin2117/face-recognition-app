import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ( { imgURL, box } ) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inputImage' src={imgURL} alt='' width='600px' height='auto'></img>
            <div className='bounding-box' style={{top: box.top, right: box.right, bottom: box.bottom, left: box.left}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition