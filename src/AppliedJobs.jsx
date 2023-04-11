import React, { useState } from 'react';
import { getJob } from '../public/dataBase';
import { useLoaderData } from 'react-router-dom';
import JobsApply from './JobsApply';

const AppliedJobs = () => {
    const allJobs = useLoaderData()

    let jobs = []
    const saveJobs = getJob()
    for (const id in saveJobs) {
        const foundJob = allJobs.find(job => job.id == id)
        if (foundJob) {
            jobs.push(foundJob)
        }
    }
    const [allJob, setAllJob] = useState(jobs)

    const handleRemote = (event) => {
        setAllJob(jobs)
        if (event.target.value === "remote") {
            const job = jobs.filter(job => job.job_type == "Remote")
            setAllJob(job)
        }
        else if (event.target.value === "onsite") {
            const job = jobs.filter(job => job.job_type == "Onsite")
            setAllJob(job)
        }
        else{
            setAllJob(jobs)
        }
    }

    return (
        <div>
            <div className='bg-secondary mb-36 py-16'>
                <h2 className='text-2xl font-bold text-center text-primary'>Applied Jobs</h2>
            </div>
            <div className='text-end w-10/12'>
                <select onChange={handleRemote} className='bg-secondary border-none px-2 rounded-md py-1'>
                    <option  value="all">ALL</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">Onsite</option>
                </select>
            </div>
            <div>
                {
                    allJob.map(job => <JobsApply
                        key={job.id}
                        job={job}
                    ></JobsApply>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;