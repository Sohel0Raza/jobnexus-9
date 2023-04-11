import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='md:flex justify-between md:px-20 py-3 items-center bg-secondary text-primary'>
            <div className='px-5 md:px-0 py-3 md:py-0'>
                <h2 className='text-2xl font-bold'>Job Nexus</h2>
            </div>
            <div className='pl-5 md:pl-0 space-y-1 md:space-y-0 md:space-x-8 font-medium'>
                    <NavLink to="/" className={`block md:inline $({ isActive }) =>
                        isActive ? 'active' : 'default'
                    `}>Home</NavLink>
                    <NavLink to="/statistics" className={`block md:inline $({ isActive }) =>
                        isActive ? 'active' : 'default'
                    `}>Statistics</NavLink>
                    <NavLink to="/appliedJobs" className={`block md:inline $({ isActive }) =>
                        isActive ? 'active' : 'default'
                    `}>Applied Jobs</NavLink>
                    <NavLink to="/Blogs" className={`block md:inline $({ isActive }) =>
                        isActive ? 'active' : 'default'
                    `}>Blogs</NavLink>
            </div>
            <button className="btn btn-primary text-white hover:bg-sky-400 ml-5 md:ml-0 mt-2 md:mt-0">Start Applying</button>
        </div>
    );
};

export default Header;