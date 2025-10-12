import React, { useEffect, useState } from 'react';
import { Download, Star, MessageSquare } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../assets/App-Error.png'
import { Link } from 'react-router';




const Installation = () => {
    const [installlist, setInstalllist] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    // Load from localStorage
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('Installed')) || [];
        setInstalllist(savedList);
    }, []);


    const handleSortChange = (value) => {
        setSortOrder(value);

        let sortedList = [...installlist];
        if (value === 'downloads-asc') {
            sortedList.sort((a, b) => a.downloads - b.downloads
            );
        } else if (value === 'downloads-desc') {
            sortedList.sort((a, b) => b.downloads - a.downloads
            );
        }

        setInstalllist(sortedList);
        console.log(installlist)
    };


    const handleRemove = (id) => {
        const updatedList = installlist.filter(a => a.id !== id);
        setInstalllist(updatedList);
        localStorage.setItem('Installed', JSON.stringify(updatedList));

        toast.success('App uninstalled successfully!', {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
        });
    };

    return (
        <div className="flex flex-col justify-item lg:p-20 p-5">
            {installlist.length === 0 ? (
                <div className='flex flex-col justify-center items-center h-screen'>
                    <img src={img} alt="App-Error.png" />
                    <h1 className='text-black text-[48px]  text-center'>OPPS!! NO APP INSTALLED</h1>
                    <p className='text-[20px] text-center pb-3'> To install your required app please go app page. <br /> Thanks </p>
                    <Link to='/app'>
                        <a className="btn bg-gradient-to-r from-[#5a22df]  to-[#9557eb] text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out ">
                            APPS </a>
                    </Link>

                </div>) : (
                <>
                    <h1 className="text-black text-[48px] text-center">Your Installed <br />Apps</h1>
                    <p className="text-[20px] text-center pb-3">Explore All Trending Apps on the Market developed by us</p>

                    <div className="flex justify-between pl-5 pr-5 items-center">
                        <p className="flex text-2xl">({installlist.length}) Installed App</p>


                        <label className="form-control w-full max-w-xs">
                            <select
                                className="select select-bordered"
                                value={sortOrder}
                                onChange={(e) => handleSortChange(e.target.value)}
                            >
                                <option value="none">Sort By Download</option>
                                <option value="downloads-asc">Low → High</option>
                                <option value="downloads-desc">High → Low</option>
                            </select>
                        </label>
                    </div>


                    <div className="lg:pt-5 p-5">
                        {installlist.map((a) => (
                            <div key={a.id}>
                                <ul className="list bg-gray-100 border-1 mt-5 rounded-box shadow-md">
                                    <li className="list-row flex items-center justify-between p-4 gap-6">
                                        <div className="flex items-center gap-4">
                                            <img className="lg:size-20 size-10 rounded-box" src={a.image} alt={a.title} />
                                            <div>
                                                <div className="text-[20px] font-semibold">{a.title}</div>
                                                <div className="flex flex-row flex-wrap gap-6 lg:mt-4">
                                                    <div className="flex items-center gap-2">
                                                        <Download className="text-green-500" />
                                                        <p>{a.downloads}<span>M</span></p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Star className="text-yellow-400 fill-yellow-400" />
                                                        <p>{a.ratingAvg}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MessageSquare className="text-purple-500" />
                                                        <p>{a.reviews}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleRemove(a.id)}
                                            className="lg:mt-4 h-10 bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600"
                                        >
                                            Uninstall
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )
            }
            <ToastContainer />

        </div >
    );
};


export default Installation;
