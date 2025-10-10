import React from 'react';
import img from '../assets/App-Error.png'



const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img src={img} alt="App-Error.png" />
        </div>
    )
};

export default ErrorPage;