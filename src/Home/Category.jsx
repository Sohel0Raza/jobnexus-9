import React from 'react';

const Category = ({ job }) => {
    const { name, img, available_jobs } = job;
    return (
        <div className='bg-slate-100 rounded-xl shadow-2xl'>
            <div className='h-24 w-24 mx-auto pt-5'>
                <img className='w-full' src={img} alt="" />
            </div>
            <div className='text-center px-3 py-3'>
                <h4 className='text-xl font-semibold'>{name}</h4>
                <p>{available_jobs}+ Jobs Available</p>
            </div>
        </div>
    );
};

export default Category;