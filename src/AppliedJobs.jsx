import React, { useState } from 'react';
import { getJob } from '../public/dataBase';
import { useLoaderData } from 'react-router-dom';
import JobsApply from './JobsApply';

const AppliedJobs = () => {
    const allJobs = useLoaderData()
    
    let jobs = []
    const saveJobs = getJob()
    for(const id in saveJobs){
        const foundJob = allJobs.find(job => job.id == id)
        if(foundJob){
            jobs.push(foundJob)
        }
    }
    const [allJob, setAllJob] = useState(jobs)
    const handleRemote = () =>{
       const job = allJob.filter(job => job.job_type == "Remote")
        setAllJob(job)
    }
    const handleOnsite = () =>{
       const job = allJob.filter(job => job.job_type == "Onsite")
        setAllJob(job)
    }
    return (
        <div>
            <div className='bg-secondary mb-36 py-16'>
                <h2 className='text-2xl font-bold text-center text-primary'>Applied Jobs</h2>
            </div>
            <div className='text-end w-10/12'>
            <button onClick={handleRemote} className='btn bg-gradient-to-r from-primary to-sky-500 py-1 text-white mt-3 mr-5 hover:bg-secondary border-none'>Remote</button>
            <button onClick={handleOnsite} className='btn bg-gradient-to-r from-primary to-sky-500 py-1 text-white mt-3 hover:bg-secondary border-none'>Onsite</button>
            </div>
            <div>
                {
                    allJob.map(job=><JobsApply 
                    key={job.id}
                    job={job}
                    ></JobsApply>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;