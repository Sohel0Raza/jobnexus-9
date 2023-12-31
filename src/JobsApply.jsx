import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobsApply = ({ job }) => {
    const { id, logo, company, salary, name, location, job_type, job_time } = job

    return (
        <div className='flex justify-between items-center border shadow-xl px-10 my-10 w-9/12 mx-auto'>
            <div className='flex justify-center items-center'>
                <div className='h-60 w-60 mr-4'>
                    <img className='h-full' src={logo} alt="" />
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
                </div>
            </div>
            <div>
                <Link to="/">
                    <button className='btn bg-gradient-to-r from-primary to-sky-500 py-1 text-white mt-3 hover:bg-secondary border-none'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default JobsApply;