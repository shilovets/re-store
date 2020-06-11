import React from 'react';

import './error-indicator.css';
import icon from './oops.png';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator text-center'>
            <img src={icon} alt="Error icon"/>
            <h1>Stranger things</h1>
        </div>
    );
};

export default ErrorIndicator;