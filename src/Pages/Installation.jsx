import React, { useEffect, useState } from 'react';
import { Download, Star, MessageSquare, Loader } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';



const Installation = () => {
    const [installlist, setInstalllist] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('Installed'))
        if (saveList) setInstalllist(saveList)
    }, [])



    const sortedItem = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installlist].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'downloads-desc') {
            return [...installlist].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installlist
        }
    })()



    const handleRemove = id => {
        const existingList = JSON.parse(localStorage.getItem('Installed')) || [];

        let updatedList = existingList.filter(a => a.id !== id)
        setInstalllist(updatedList)

        localStorage.setItem('Installed', JSON.stringify(updatedList));
        toast.success('App uninstalled successfully!', {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
        });
    }






    return (

        <div className='flex flex-col justify-item lg:p-20 p-5 '>
            <h1 className='text-black text-[48px]  text-center'>Your Installed <br />Apps</h1>
            <p className='text-[20px] text-center pb-3'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between pl-5 pr-5 items-center'>
                <p className='flex text-2xl  '>
                    ({sortedItem.length}) Installed App
                </p>
                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value="none">Sort By Download</option>
                        <option value="downloads-asc">Low → High</option>
                        <option value="downloads-desc">High → Low</option>
                    </select>
                </label>

            </div>
            <div className='lg:pt-5 p-5'>
                {sortedItem.map(a =>
                    < div key={a.id} >
                        <ul className="list bg-gray-100 border-1 mt-5 rounded-box shadow-md">
                            <li className="list-row ">
                                <div><img className="lg:size-20 size-10 rounded-box"
                                    src={a.image}
                                    alt={a.title} /></div>
                                <div className=''>
                                    <div className='text-[20px]'>{a.title}</div>

                                    <div className="flex flex-row flex-wrap gap-6 lg:mt-4">
                                        <div className="flex items-center gap-2">
                                            <Download className="text-green-500" />
                                            <div>
                                                <p className=" text-center">{a.downloads}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="text-yellow-400 fill-yellow-400" />
                                            <div>
                                                <p className="text-center">{a.ratingAvg}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MessageSquare className="text-purple-500" />
                                            <div>
                                                <p className="text-center">{a.reviews}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(a.id)}
                                    className="lg:mt-4 h-10  bg-green-500 text-white hover:cursor-pointer px-6 py-2 rounded-lg font-medium hover:bg-green-600">
                                    Uninstall
                                </button>
                            </li>

                        </ul>
                    </div>
                )}
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Installation;