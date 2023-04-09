import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='flex justify-between md:px-20 py-3 items-center bg-sky-100 text-accent'>
            <div>
                <h2 className='text-2xl font-bold'>Job Nexus</h2>
            </div>
            <div className='space-x-8 font-medium'>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'active' : 'default'
                }>Home</NavLink>
                <NavLink to="/statistics" className={({ isActive }) =>
                    isActive ? 'active' : 'default'
                }>Statistics</NavLink>
                <NavLink to="/appliedJobs" className={({ isActive }) =>
                    isActive ? 'active' : 'default'
                }>Applied Jobs</NavLink>
                <NavLink to="/Blogs" className={({ isActive }) =>
                    isActive ? 'active' : 'default'
                }>Blogs</NavLink>
            </div>
            <button className="btn btn-success text-white hover:bg-sky-400">Start Applying</button>
        </div>
    );
};

export default Header;