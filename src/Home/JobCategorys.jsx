import React, { useEffect, useState } from 'react';
import Category from './Category';

const JobCategory = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => setJobs((data)))
    },[])
    return (
        <div className='md:w-9/12 mx-auto'>
            <h2 className='text-3xl font-bold my-14 text-center'>Job Category List</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    jobs.map(job => <Category
                    key={job.id}
                    job={job}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;