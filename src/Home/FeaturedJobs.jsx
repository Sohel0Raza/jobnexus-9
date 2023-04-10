import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const FeaturedJobs = ({ featuredJob}) => {
    const { id, logo, name, company, job_type, job_time, location, salary } = featuredJob;
    
    return (
        <div className='border p-8 rounded-lg shadow-2xl'>
            <div className='h-28 w-28'>
                <img src={logo} alt="" />
            </div>
            <div>
                <h4 className='font-bold text-xl'>{name}</h4>
                <p className='pt-1'>{company}</p>
                <button className='featured-btn'>{job_type}</button>
                <button className='featured-btn'>{job_time}</button>
                <div className='flex items-center font-medium'>
                    <span><MapPinIcon className='h-4 w-4 mr-1'></MapPinIcon></span>
                    <p className='mr-4'>{location}</p>
                    <CurrencyDollarIcon className='h-4 w-4 mr-1'></CurrencyDollarIcon>
                    <p>Salary: {salary}</p>
                </div>
                <Link to={`/jobDetails/${id}`}>
                    <button className='btn bg-gradient-to-r from-primary to-sky-500 py-1 text-white mt-3 hover:bg-secondary border-none'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;