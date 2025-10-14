import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import downlodImg from '../../assets/icon-downloads.png'
import ratindImg from '../../assets//icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addToDb, getStoreApp } from '../../Utility/AddToDb';
import { toast } from 'react-toastify';


const DetailsApp = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const appId = parseFloat(id);
    const singleApp = data.find(app => app.id === appId) || null; // ✅ Check for null
    const previousPage = useNavigate();

    const [disable, setDisable] = useState(false);

    useEffect(() => {
    const stored = getStoreApp();
    
    setDisable(stored.includes(appId.toString()));

    const handleChageS = () => {
        const updated = getStoreApp();
        setDisable(updated.includes(appId.toString()));
    };

    window.addEventListener("storage", handleChageS);
    return () => window.removeEventListener("storage", handleChageS);
}, [appId]);

const handleInstall = (id) => {
    addToDb(id);
    setDisable(true);
    toast.success("✅ Successfully Installed!");
};

    
    const numbers = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(0) + "K";
        return num;
    };


     if (!singleApp) {
        return (
            <div className="flex flex-col justify-center items-center mt-20">
                
                <h2 className="text-3xl font-semibold mt-4">App Not Found</h2>
                <p className="text-gray-500 text-sm mt-2 text-center">
                    The app you are looking for does not exist or has been removed.
                </p>
                <button
                    onClick={() => previousPage(-2)}
                    className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4'
                >
                    Go Back
                </button>
            </div>
        );
    }



    const chartData = singleApp.ratings.map(rating => {
        const ratingData = {
            name: rating.name,
            count: rating.count
        }
        return ratingData;
    })



    return (
        <div className='w-full p-6'>
            <div className="flex flex-col md:flex-row items-center gap-7 md:gap-12 bg-white shadow-sm justify-center rounded-2xl p-2 md:p-5  mx-auto mt-10">
                <div className=''>
                    <img
                        src={singleApp.image}
                        alt={singleApp.title}
                        className="w-30 h-30 object-contain rounded-xl"
                    />
                </div>

                <div className="flex flex-col flex-1 items-center md:items-start">
                    <div className='space-y-2 '>
                        <h2 className="text-3xl font-semibold text-gray-900">{singleApp.title}</h2>
                        <p className="text-sm text-gray-500 pb-2 font-semibold ">
                            Developed by <span className='text-[#834AEB]'>{singleApp.companyName}</span>
                        </p>
                    </div>

                    <div className="flex gap-6 mt-3 text-center border-t border-gray-300 pt-3">
                        <div className='flex flex-col items-center md:items-start justify-center space-y-1'>
                            <img
                                className='w-6' src={downlodImg} alt="" />
                            <p className="text-gray-500 text-sm">Downloads</p>
                            <p className="text-lg font-bold">{numbers(singleApp.downloads)}</p>
                        </div>
                        <div className='flex flex-col items-center  justify-center space-y-1'>
                            <img
                                className='w-5' src={ratindImg} alt="" />
                            <p className="text-gray-500 text-sm">Average Rating</p>
                            <p className="text-xl font-bold ">{singleApp.ratingAvg}</p>
                        </div>
                        <div className='flex flex-col items-center md:items-start justify-center space-y-1'>
                            <img
                                className='w-6' src={reviewImg} alt="" />
                            <p className="text-gray-500 text-sm">Total Reviews</p>
                            <p className="text-lg font-bold">{numbers(singleApp.reviews)}</p>
                        </div>
                    </div>

                    <button disabled={disable} onClick={() => handleInstall(id)} className={`mt-4 btn  font-medium px-4 py-2 rounded-lg w-fit ${disable ? "bg-gray-800 cursor-not-allowed text-gray-600" : "hover:transition-transform hover:scale-105 duration-500  bg-purple-50 hover:bg-purple-200"}`}>
                        <span className='text-sm font-semibold bg-gradient-to-r from-[#632EE3] to-[#8e62e0] bg-clip-text text-transparent'>
                            {disable ? "Installed" : `Install Now (${singleApp.size} MB)`}
                        </span>
                    </button>
                </div>
            </div>

            <div className='p-6 mt-10 rounded-2xl shadow-sm'>

                <h3 className="text-lg font-semibold mb-4">Ratings</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        layout='vertical'
                        data={chartData}
                    >
                        <CartesianGrid stroke="#ccc" strokeDasharray="3 5" />
                        <XAxis type='number'></XAxis>
                        <YAxis dataKey={"name"} type='category'></YAxis>
                        <Tooltip></Tooltip>

                        <Bar dataKey={"count"} fill='#8884d8'></Bar>

                    </BarChart>

                </ResponsiveContainer>
            </div >

            <div className='p-6 mt-10 rounded-2xl'>
                <h1 className="text-lg font-semibold mb-4">
                    Description
                </h1>
                <p className='text-sm text-wrap font-semibold text-gray-400'>
                    {singleApp.description}
                </p>
            </div>


        </div>

        
    );
    
};

export default DetailsApp;