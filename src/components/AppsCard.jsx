import React from 'react';
import { Download, Star } from "lucide-react";
import Apps from '../Pages/Apps';


const AppsCard = ({ apps }) => {
    const { image, title, downloads, ratingAvg } = apps
    return (
        <a className="card pt-5 bg-white h-[435px] w-[348px] hover:scale-105 transition ease-in-out shadow-sm">
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
                    <div className=" bg-gray-100 h-8 w-22 flex items-center gap-1 text-green-400">
                        <Download className="w-5 h-5" />
                        {downloads}
                    </div>
                    <div className=" bg-amber-100 h-8 w-12 flex items-center gap-1 text-orange-400">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        {ratingAvg}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default AppsCard;