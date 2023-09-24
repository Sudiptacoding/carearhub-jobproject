import React from 'react';
import '../../App.css'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <div className='flex flex-col items-center justify-center lg:flex-row banner xl:px-[300px] lg:px-[50px] px-10 text-center lg:text-start pt-5 lg:pt-0'>
                <div className='flex-1'>
                    <h1 className='text-[#1A1919] lg:text-[80px] text-4xl font-extrabold lg:leading-[100px] lg:pr-[20px]'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className='text-[#757575] text-lg font-medium mt-6 mb-8 lg:pr-24'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-custom-gradient'>Get Started</button>
                </div>
                <div className='flex-1'>
                    <img className='w-full' src="https://i.postimg.cc/Pf1gHksL/user.png" alt="" />
                </div>
            </div>
        </>

    );
};

export default Banner;