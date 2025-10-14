import React from 'react';
import Navbar from '../../Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Footer/Footer';
import Loader from '../../Loader/Loader';

const Root = () => {

    const navigation = useNavigation();
    return (
        <div className=''>
            <Navbar></Navbar>
            {navigation.state === "loading" && <Loader></Loader>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;