import React from 'react';
import { Link } from 'react-router';
import Img from '../../assets/logo.png'
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item-2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className='flex items-center justify-center gap-1'>
                    <img
                        className='w-7'
                        src={Img} alt="" />
                    <h2 className='text-xl font-bold bg-gradient-to-r from-[#632EE3] to-yellow-600 bg-clip-text text-transparent'>HERO.IO</h2>
                </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item-2</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>

            <div className='navbar-end'>
                <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
                    href={`https://github.com/Saif-Uddin0?tab=repositories`}
                    target={'_blank'}><span className=''><Github /></span>Contribute</a>
            </div>


        </div>
    );
};

export default Navbar;