import React from 'react';
import googlePlayImg from '../../../assets/fi_16076057.png'
import playStore from '../../../assets/Group (2).png'
import BannerImg from '../../../assets/hero.png'


const Banner = () => {
    return (
        <div className='w-full mt-20'>
            <div className='container mx-auto flex flex-col justify-center items-center gap-10'>
                <div className='text-center space-y-3'>
                    <h1 className='text-5xl font-semibold text-black'>We Build <br />
                        <span className='text-[#632EE3]'>Productive</span> Apps</h1>
                    <p className='text-xs font font-semibold text-gray-400'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='flex items-center justify-center gap-5 mt-5 p-1'>
                        <a className='btn py-2 flex items-center justify-center gap-1' href={'https://play.google.com/store/games?hl=en&pli=1'}
                        target={'_blank'}>
                            <img src={googlePlayImg} alt="" />Google Play
                        </a>
                        <a className='btn py-2 flex items-center justify-center text gap-1' href={'https://www.apple.com/app-store/'}
                        target={'_blank'}>
                            <img src={playStore} alt="" />App Store
                        </a>
                    </div>
                </div>
                <div>
                    <img src={BannerImg} alt="" />
                </div>

            </div>
            <section className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-16">
                <div className="container mx-auto text-center px-4">
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-12">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">   
                        <div>
                            <p className="mt-2 text-sm text-gray-200">Total Downloads</p>
                            <h3 className="text-5xl font-extrabold">29.6M</h3>
                            <p className="mt-1 text-xs text-gray-300">
                                21% More Than Last Month
                            </p>
                        </div>

                        
                        <div>
                            <p className="mt-2 text-sm text-gray-200">Total Reviews</p>
                            <h3 className="text-5xl font-extrabold">906K</h3>
                            <p className="mt-1 text-xs text-gray-300">
                                46% More Than Last Month
                            </p>
                        </div>

                        
                        <div>
                            <p className="mt-2 text-sm text-gray-200">Active Apps</p>
                            <h3 className="text-5xl font-extrabold">132+</h3>
                            <p className="mt-1 text-xs text-gray-300">
                                31 More Will Launch
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;