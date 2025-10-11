import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [installlist, setInstalllist] = useState([])
    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('Installed'))
        if (saveList) setInstalllist(saveList)
    }, [])
    return (

        <div className='flex flex-col justify-item lg:p-20  h-screen'>
            <h1 className='text-black text-[48px]  text-center'>Your Installed <br />Apps</h1>
            <p className='text-[20px] text-center pb-3'>Explore All Trending Apps on the Market developed by us</p>
            <p className='flex text-2xl justify-self-start '>
                ({installlist.length}) Installed App
            </p>
            <div>

            </div>
        </div>
    );
};

export default Installation;