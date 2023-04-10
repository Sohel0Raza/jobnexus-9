import React from 'react';
import { getJob } from '../public/dataBase';
import { useLoaderData } from 'react-router-dom';
import JobsApply from './JobsApply';

const AppliedJobs = () => {
    const allJobs = useLoaderData()
    
    let jobs = []
    const saveJobs = getJob()
    for(const id in saveJobs){
        const foundJob = allJobs.find(job => job.id == id)
        console.log('foundJob :', foundJob);
        if(foundJob){
            jobs.push(foundJob)
        }
    }
    console.log('jobs :', jobs);
    return (
        <div>
            <div className='bg-secondary mb-36 py-16'>
                <h2 className='text-2xl font-bold text-center text-primary'>Applied Jobs</h2>
            </div>
            <div>
                {
                    jobs.map(job=><JobsApply 
                    key={job.id}
                    job={job}
                    ></JobsApply>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;