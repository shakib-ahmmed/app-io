import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { Link } from 'react-router';
import img from '../assets/hero.png'
import AppsCard from '../components/AppsCard';
import Apps from './Apps';
import useApps from '../../public/Hooks/allapps';

const Home = () => {


    const { apps, loading, error } = useApps()

    const featuredApps = apps.slice(0, 8)
    console.log(apps)

    return (
        <div className='flex flex-col items-center justify-center text-center bg-gray-100'>
            <h1 className='lg:text-[72px] text-[48px] flex-col block gap-0 font-bold'>We Build <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3]  to-[#9F62F2]'>Productive</span>
                Apps
            </h1>
            <p className='text-gray-500'>At APP.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            {/* Buttons */}

            <div className="flex gap-4 mt-6">

                <a href="https://play.google.com/store" target="_blank" className="flex items-center gap-2 bg-[#632EE3] text-white px-6 py-2  hover:bg-[#5320d1] transition" >
                    <FaGooglePlay size={20} />
                    Google Play
                </a>

                <a href="https://www.apple.com/app-store/" target="_blank" className="flex items-center gap-2 bg-[#9F62F2] text-white px-6 py-2 hover:bg-[#8640e8] transition" >                    <FaApple size={22} /> App Store
                </a>
            </div>

            {/* Banner Img */}

            <img className="mt-10" src={img} alt="hero" />

            <div className="w-full lg:h-[410px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-20">
                <h1 className="text-[38px] font-bold text-white text-center mb-4">
                    Trusted by Millions, Built for You
                </h1>

                <div className="flex flex-col md:flex-row justify-center gap-1">
                    <div className="flex-1 p-4 text-center ">
                        <h3 className="text-[20px] font-medium text-white">Total Downloads</h3>
                        <h1 className="lg:text-[62px] text-[40px] font-bold mt-1 text-white">29.6M</h1>
                        <h3 className="text-[20px] text-white mt-1">15% more than last month</h3>
                    </div>

                    <div className="flex-1 p-4 text-center ">
                        <h3 className="text-[20px] font-medium text-white">Active Users</h3>
                        <h1 className="lg:text-[62px] text-[40px] font-bold mt-1 text-white">132+</h1>
                        <h3 className=" text-[20px] text-white mt-1">31 More Will Launch</h3>
                    </div>

                    <div className="flex-1 p-4 text-center ">
                        <h3 className="text-lg font-medium text-white">Revenue</h3>
                        <h1 className="lg:text-[62px] text-[40px] font-bold mt-1 text-white">906K</h1>
                        <h3 className="text-[20px] text-white mt-1">46% more than last month</h3>
                    </div>
                </div>
            </div>

            {/* Card Section */}
            <div className='flex flex-col items-center justify-center text-center pb-10 bg-gray-100'>
                <h1 className='text-[48px] flex-col block gap-0 font-bold'>
                    Trending Apps
                </h1>
                <p className='text-gray-500 text-[20px]'>
                    Explore All Trending Apps on the Market developed by us
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 mg:grid-col-2 lg:grid-cols-4 gap-4 pt-10'>
                    {featuredApps.map(apps => (
                        <AppsCard key={apps.id} apps={apps} />
                    ))}
                </div>
                <div className='flex justify-between py-5 items-center '>
                    <Link className='btn btn-outline' to='./app'>See All</Link>
                </div>
            </div >

        </div >
    )
};

export default Home;