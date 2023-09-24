import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const links = <div className='flex flex-col gap-4 font-bold sm:flex-row'>
        <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#7E90FE]" : ""}>Statistics</NavLink>
        <NavLink to='/appliedjob' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#7E90FE]" : ""}>Applied Jobs</NavLink>
        <NavLink to='/blog' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#7E90FE]" : ""}>Blog</NavLink>
    </div>
    return (
        <div className="navbar banner xl:px-[300px] lg:px-[50px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-slate-500 text-white pl-5 py-4 shadow rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="text-xl normal-case btn btn-ghost"><Link to='/'>CareerHub</Link></a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="bg-custom-gradient">Star Applying</a>
            </div>
        </div>
    );
};

export default Header;