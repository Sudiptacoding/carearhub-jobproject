import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <div className='flex items-center justify-center w-full h-screen'>
                <h1 className='text-2xl font-extrabold text-gray-800'>No Content Here</h1>
            </div>
        </div>
    );
};

export default Blog;