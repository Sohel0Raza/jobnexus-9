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
        <div className='md:w-9/12 mx-auto text-center my-7 md:my-14 '>
            <h2 className='text-3xl font-bold mb-3'>Job Category List</h2>
            <p className='mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
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