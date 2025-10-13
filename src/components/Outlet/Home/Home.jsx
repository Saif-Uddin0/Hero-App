import React from 'react';
import Banner from './Banner';
import TrendingApps from '.././TredndingApp/TrendingApps'
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <TrendingApps key={data.id} data={data} ></TrendingApps>
        </div>
    );
};

export default Home;