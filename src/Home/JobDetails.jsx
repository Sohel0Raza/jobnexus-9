import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb } from '../../public/dataBase';
const JobDetails = () => {
    const jobDetail = useLoaderData()
    const {id, description, responsibility, education, experience, salary, name, phone, email, location } = jobDetail;
    
    return (
        <div className='md:w-9/12 mx-auto'>
            <h2 className='text-3xl font-bold md:my-20 text-center'>Job Details</h2>
            <div className='md:flex md:my-10'>
                <div className='space-y-4 md:w-1/2'>
                    <h4><span className='text-xl font-semibold'> Job Description:</span> <span>{description}</span></h4>
                    <h4><span className='text-xl font-semibold'> Job Responsibility:</span> <span>{responsibility}</span></h4>
                    <h4 className='text-xl font-semibold'> Education Requirements:</h4>
                    <p>{education}</p>
                    <h4 className='text-xl font-semibold'>Experiences:</h4>
                    <p>{experience}</p>
                </div>
                <div className='md:ml-10'>
                    <div className='bg-slate-200 py-4 px-6 rounded-md'>
                        <h4 className='font-semibold text-xl mb-3'>Job Details</h4>
                        <div className='space-y-2'>
                            <p><span className='font-bold'>Salary</span>: {salary}</p>
                            <p><span className='font-bold'>Job Title</span>: {name}</p>
                        </div>
                        <h4 className='font-semibold text-xl my-3'>Contact Information</h4>
                        <div className='space-y-2'>
                            <p><span className='font-bold'>Phone</span>: {phone}</p>
                            <p><span className='font-bold'>Email</span>: {email}</p>
                            <p>
                                <span className='font-bold'>Address</span>: {location}</p>
                        </div>
                    </div>
                    <Link to="/appliedJobs">
                        <button onClick={()=> addToDb(id)} className='btn bg-gradient-to-r from-primary to-sky-500 py-1 text-white mt-3 hover:bg-secondary border-none w-full'>Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;