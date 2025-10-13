import React from 'react';
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const AppsPageShow = ({singleApp}) => {
    return (
        <Link to={`/details/${singleApp.id}`}><div className=' bg-white mx-auto'>
                    <div className=" rounded-xl shadow-md overflow-hidden w-80 p-5 hover:transition-transform hover:scale-105 duration-500">
        
                        <div className="flex justify-center">
                            <img
                                src={singleApp.image}
        
                                className="w-24 h-24 object-contain"
                            />
                        </div>
        
                        <h3 className="mt-4 text-lg font-bold text-gray-900">{singleApp.title}</h3>
                        <p className="text-sm text-gray-500">{singleApp.companyName}</p>
        
                        <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                            {singleApp.description}
                        </p>
        
        
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1 rounded-md text-sm font-medium">
                                <FaDownload />
                                {(singleApp.downloads / 1000000).toFixed(0)}M+
                            </div>
        
        
                            <div className="flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-md text-sm font-medium">
                                <FaStar /> {singleApp.ratingAvg}
                            </div>
                        </div>
        
                        <p className="mt-2 text-xs text-gray-500">
                            {singleApp.reviews.toLocaleString()} reviews
                        </p>
                    </div>
                </div></Link>
    );
};

export default AppsPageShow;