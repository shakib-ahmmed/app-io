import React from 'react';
import { Download, Star } from "lucide-react";
import Apps from '../Pages/Apps';
import { Link } from 'react-router';


const AppsCard = ({ apps }) => {
    const { image, title, downloads, ratingAvg, id, } = apps
    return (
        <Link to={`/app/${id}`} >

            <div className="card pt-5 bg-white lg:h-[435px] lg:w-[300px] gap-2 hover:scale-105 transition ease-in-out shadow-sm">
                <figure className=' overflow-hidden'>
                    <img className='w-full p-4 object-cover'
                        src={image}
                        alt="apps" />
                </figure>
                <div className="card-body">
                    <h2 className="title text-2xl">
                        {title}
                    </h2>

                    <div className="card-actions text-center justify-between mt-4">
                        <div className=" bg-gray-100 h-7 w-13 flex items-center gap-1 text-green-400">
                            <Download className="w-5 h-5" />
                            {downloads}<span>M</span>
                        </div>
                        <div className=" bg-amber-100 h-7 w-12 flex items-center gap-1 text-orange-400">
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            {ratingAvg}
                        </div>
                    </div>
                </div>
            </div>
        </Link>


    );
};

export default AppsCard;