import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../components/Outlet/Root/Root';
import ErrorPage from '../components/Outlet/ErrorPage/Errorpage';
import Home from '../components/Outlet/Home/Home';



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                index:true  ,
                path: '/',
                Component: Home
            }
        ]
    },
]);


