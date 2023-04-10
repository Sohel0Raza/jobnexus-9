
const jobsLoader = async (req) => {
    const jobId = req.params.id;
    const loadedJobs = await fetch('/featuredJobs.json');
    const jobs = await loadedJobs.json();

    return jobs.find(jb => jb.id == jobId);
}
export default jobsLoader;