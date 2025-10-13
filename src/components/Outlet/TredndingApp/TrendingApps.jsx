import React, { Suspense } from 'react';
import TAppData from '../TAppData/TAppData';
import { Link } from 'react-router';






const Apps = ({ data }) => {
    return (
        <div className='w-full flex flex-col items-center justify-between'>
            <div className='my-15 space-y-5'>
                <h1 className='text-4xl font-bold text-center mb-3'>Trending Apps</h1>
                <p className='text-xs font-semibold text-center text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5 mt-15'>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        {
                            data.map(singleApp => <TAppData
                                key={singleApp.id}
                                singleApp={singleApp}></TAppData>)
                        }
                    </Suspense>


                </div>
            </div>
            <Link to={'/apps'}>
                <a
                    className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'
                    href="">
                    Show All
                </a>
            </Link>
        </div>
    );
};

export default Apps;