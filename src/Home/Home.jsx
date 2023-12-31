import React, { useState } from 'react';
import HomeHeader from './HomeHeader';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategorys';

const Home = () => {
    const allFeaturedJobs = useLoaderData()
    const [featuredJobs, setFeaturedJobs] = useState({data:allFeaturedJobs.slice(0,4)})
    const handleShowAll = () =>{
        setFeaturedJobs({...allFeaturedJobs, data:allFeaturedJobs, isShowAll:true})
    }
    return (
        <div>
            <HomeHeader></HomeHeader>
            <JobCategory></JobCategory>
            <div className='my-8 md:my-16 text-center'>
                <h2 className='text-3xl font-bold mb-3'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 md:w-10/12 mx-auto'>
                {
                    featuredJobs.data.map(featuredJob => <FeaturedJobs
                    key={featuredJob.id}
                    featuredJob={featuredJob}
                    ></FeaturedJobs>)
                }
            </div>
            <div className={`text-center my-6 ${featuredJobs.isShowAll ? 'hidden' : ''}`}>
                <button onClick={handleShowAll} className='btn bg-primary text-white hover:bg-secondary border-none'>See More</button>
            </div>
        </div>
    );
};

export default Home;