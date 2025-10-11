import React from 'react';
import loaderIcon from '../../assets/logo.png'
const LoadingSpinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img className='animate-spin w-96' src={loaderIcon} alt="logo icon loading" />
        </div>
    );
};

export default LoadingSpinner;