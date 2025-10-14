import React from 'react';
import { Link, NavLink } from 'react-router';
import Img from '../../assets/logo.png'
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='w-full bg-base-100 shadow-sm '>
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink className={({isActive}) => isActive ? "text-purple-600  font-bold" : "text-gray-700 font-semibold text-sm hover:underline hover:text-black"} to={'/'}><li >Home</li></NavLink>
                            <NavLink className={({isActive}) => isActive ? "text-purple-600  font-bold" : "text-gray-700 font-semibold text-sm hover:underline hover:text-black"} to={'/apps'}><li >App</li></NavLink>
                            <NavLink className={({isActive}) => isActive ? "text-purple-600  font-bold" : "text-gray-700 font-semibold text-sm hover:underline hover:text-black"} to={'/install'} ><li >Installation</li></NavLink>
                            
                        </ul>
                    </div>
                    <Link to={'/'}>
                    <div className='flex items-center justify-center gap-1'>
                        <img
                            className='w-7'
                            src={Img} alt="" />
                        <h2 className='text-xl font-bold bg-gradient-to-r from-[#632EE3] to-yellow-600 bg-clip-text text-transparent'>HERO.IO</h2>
                    </div>
                    </Link>


                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        <NavLink className={({isActive}) => isActive ? "text-purple-600 font-bold" : "text-gray-700 font-semibold text-sm hover:underline hover:text-black  "} to={'/'}><li >Home</li></NavLink>
                        <NavLink className={({isActive}) => isActive ? "text-purple-600  font-bold" : "text-gray-700 font-semibold text-sm hover:underline hover:text-black "} to={'/apps'}><li >App</li></NavLink>
                        <NavLink className={({isActive}) => isActive ? "text-purple-600  font-bold" : "text-gray-700 font-semibold text-sm hover:underline hover:text-black "} to={'/install'}><li >Installation</li></NavLink>
                    </ul>
                </div>

                <div className='navbar-end'>
                    <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
                        href={`https://github.com/Saif-Uddin0?tab=repositories`}
                        target={'_blank'}><span className=''><Github /></span>Contribute</a>
                </div>


            </div>
        </div>
    );
};

export default Navbar;