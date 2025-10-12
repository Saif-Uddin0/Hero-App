import React from 'react';
import Navbar from '../../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;