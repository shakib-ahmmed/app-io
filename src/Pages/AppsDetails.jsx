import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Download, Star, MessageSquare } from 'lucide-react';
import useApps from '../../public/Hooks/allapps';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import LoadingSpinner from '../components/LoadingSpinner';







const AppsDetails = () => {
    const { id } = useParams();
    const { apps, loading, } = useApps();
    const app = apps.find(a => a.id === Number(id));

    const { image, title, downloads, ratingAvg, companyName, reviews, size, ratings, description } = app || {}


    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
        const installed = existingList.some(a => a.id === app?.id);
        setIsInstalled(installed);
    }, [app]);

    if (loading) return <LoadingSpinner />

    const handleAddToInstallList = () => {
        const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
        const isDuplicate = existingList.some(a => a.id === app.id);
        if (isDuplicate) {
            return toast.error('App Already Installed');
        }
        const updatedList = [...existingList, app];
        localStorage.setItem('Installed', JSON.stringify(updatedList));
        setIsInstalled(true)
        toast.success('App installed successfully!', {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
        });

    };

    return (

        <div className="max-w-7xl mx-auto p-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow flex flex-col md:flex-row gap-6">
                <img
                    src={image}
                    alt={title}
                    className="w-32 h-32 object-contain"
                />
                <div className="flex-1 space-y-2">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="text-gray-500 text-sm">
                        Developed by <span className="text-indigo-600">{companyName}</span>
                    </p>

                    <div className="flex flex-wrap gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <Download className="text-green-500" />
                            <div>
                                <p className="font-bold text-lg">{downloads}<span>M</span> </p>
                                <p className="text-xs text-gray-500">Downloads</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="text-yellow-400 fill-yellow-400" />
                            <div>
                                <p className="font-bold text-lg">{ratingAvg}</p>
                                <p className="text-xs text-gray-500">Average Rating</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageSquare className="text-purple-500" />
                            <div>
                                <p className="font-bold text-lg">{reviews}</p>
                                <p className="text-xs text-gray-500">Total Reviews</p>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleAddToInstallList} disabled={isInstalled} className={`mt-4 px-6 py-2 rounded-lg font-medium 
                        ${isInstalled ? "bg-gray-400 text-white" : " hover:cursor-pointer bg-green-600 text-white"} `} >

                        {isInstalled ? "Installed" : `Install Now (${size})`}
                    </button>
                </div>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">User Ratings</h2>
                {ratings && ratings.length > 0 ? (
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={ratings}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#f97316" />
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <p>No ratings yet</p>
                )}
            </div>
            <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Description</h2>
                <p className="text-gray-700">{description}</p>
            </div>

            <ToastContainer />
        </div>

    );
};

export default AppsDetails;