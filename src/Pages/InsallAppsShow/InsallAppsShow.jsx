import React from 'react';
import { FaDownload, FaStar } from "react-icons/fa";

const InsallAppsShow = ({ singleApp ,handleUnistall }) => {

    


    return (
        <div className='p-2'>
            

            <div
                className="flex items-center justify-between bg-white shadow p-3 rounded-lg  mx-auto"
            >

                <div className="flex items-center gap-3">
                    <img
                        src={singleApp.image}
                        alt={singleApp.title}
                        className="w-20 h-16 object-contain rounded"
                    />
                    <div className='space-y-1.5'>
                        <h3 className="font-semibold text-gray-600">{singleApp.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1 text-green-600">
                                <FaDownload /> {(singleApp.downloads / 1000000).toFixed(0)}M
                            </span>
                            <span className="flex items-center gap-1 text-orange-500">
                                <FaStar /> {singleApp.ratingAvg}
                            </span>
                            <span className=''>{singleApp.size} MB</span>
                        </div>
                    </div>
                </div>

                <button onClick={() =>
                     handleUnistall(singleApp.id)} className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-md">
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InsallAppsShow;