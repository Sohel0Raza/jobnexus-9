import React, { useState } from 'react';
import HomeHeader from './HomeHeader';
import JobCategory from './JobCategorys';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const featuredJobs = useLoaderData()

    const [jobFeatures, setJobFeatures] = useState(featuredJobs)
    const handleAddToJob = id =>{
        
    }
    return (
        <div>
            <HomeHeader></HomeHeader>
            <JobCategory></JobCategory>
            <div className='my-8 md:my-16 text-center'>
                <h2 className='text-3xl font-bold mb-3'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 md:w-10/12 mx-auto'>
                {
                    jobFeatures.slice(0,4).map(featuredJob => <FeaturedJobs
                    key={featuredJob.id}
                    featuredJob={featuredJob}
                    handleAddToJob={handleAddToJob}
                    ></FeaturedJobs>)
                }
            </div>
        </div>
    );
};

export default Home;