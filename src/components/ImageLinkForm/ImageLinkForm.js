import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>{'Find a face on the picture. Try this face recognition app.'}</p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5 center'>
                    <input className='f4 pa2 w-70' type='text' onChange={onInputChange}></input>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect face</button>
                </div>
            </div>

        </div>
    )
}

export default ImageLinkForm