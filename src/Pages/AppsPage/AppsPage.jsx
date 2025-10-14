import React, { Suspense, useState, useEffect } from 'react'; // ✅ useEffect import korte hobe
import { useLoaderData, useNavigate } from 'react-router';
import AppsPageShow from '../AppsPageShow/AppsPageShow';
import noImg from '../../assets/App-Error.png';
import Loader from '../../components/Loader/Loader';

const AppsPage = () => {
    const data = useLoaderData();
    const [searchApp, setSearchApp] = useState('');
    const [loader, setLoader] = useState(false);

    const previousPage = useNavigate();


    useEffect(() => {
        if (searchApp .trim() ==='') {
            setLoader(false);
            return;

        }
        setLoader(true);
        const delay = setTimeout(() => {
            setLoader(false);
        }, 300);

        return () => clearTimeout(delay);
    }, [searchApp]);

    const filterApps = data.filter(app =>
        app.title.toLowerCase().includes(searchApp.toLowerCase())
    );

    return (
        <div className='p-5'>
            <div className='my-15 space-y-5'>
                <h1 className='text-4xl font-bold text-center mb-3'>Our All Applications</h1>
                <p className='text-xs font-semibold text-center text-gray-400'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>

                <div className='container mx-auto flex justify-between items-center p-4'>
                    <h3><span>({filterApps.length})</span> Apps Found</h3>

                    <label className="input flex items-center gap-2">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            value={searchApp}
                            onChange={(e) => setSearchApp(e.target.value)}
                            type="search"
                            className="grow"
                            placeholder="Search"
                        />
                        {loader && <Loader fullScreen={false} />} 
                    </label>
                </div>

                <div>
                    <Suspense fallback={<Loader />}>
                        {loader ? (
                            <div className="flex justify-center mt-10">
                                <Loader />
                            </div>
                        ) : filterApps.length > 0 ? (
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5 mt-15 justify-center items-center'>
                                {filterApps.map(singleApp => (
                                    <AppsPageShow key={singleApp.id} singleApp={singleApp} />
                                ))}
                            </div>
                        ) : (
                            <div className='flex flex-col justify-center items-center mt-10'>
                                <img src={noImg} alt="" />
                                <div className='flex flex-col justify-center items-center text-center space-y-3 mt-3'>
                                    <h4 className='text-4xl font-semibold'>OPPS!! APP NOT FOUND</h4>
                                    <p className='text-sm text-gray-400'>
                                        The App you are requesting is not found on our system. Please try another app
                                    </p>
                                    <button
                                        onClick={() => previousPage(-1)}
                                        className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'
                                    >
                                        Go Back
                                    </button>
                                </div>
                            </div>
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default AppsPage;
