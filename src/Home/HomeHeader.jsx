import React from 'react';
import Lottie from 'lottie-react'
import reader from '../assets/110942-job-hunting (1).json'
const HomeHeader = () => {
    return (
        <div className='md:flex justify-center items-center md:w-10/12 mx-auto'>
            <div className='md:w-1/2 p-5 md:p-8'>
                <Lottie animationData={reader} loop={true}></Lottie>
            </div>
            <div className='md:w-1/2 p-5 md:px-12'>
                <h2 className='text-4xl font-bold text-gray-800 leading-10'>Unlock Your Career <br /> Potential with <br /> <span className='text-info'>JobNexus</span></h2>
                <p className='py-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary mt-3 hover:bg-info text-white'>Get Started</button>
            </div>
        </div>
    );
};

export default HomeHeader;