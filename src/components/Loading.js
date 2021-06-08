import React from 'react';
import loading from '../images/gif/loading-arrow.gif';

function Loading(){
    return (
        <div className="loading">
            <h3>Rooms Data Loading...</h3>
            <img src={loading} alt="loading" />
        </div>
    )
};

export default Loading;