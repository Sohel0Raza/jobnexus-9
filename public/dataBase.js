// use local storage to manage cart data
const addToDb = id => {
    let job = getJob();
    // add quantity
    const quantity = job[id];
    if (!quantity) {
        job[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        job[id] = newQuantity;
    }
    localStorage.setItem('applied-job', JSON.stringify(job));
}

const removeFromDb = id => {
    const job = getJob();
    if (id in job) {
        delete job[id];
        localStorage.setItem('applied-job', JSON.stringify(job));
    }
}

const getJob = () => {
    let job = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-job');
    if (storedCart) {
        job = JSON.parse(storedCart);
    }
    return job;
}

const deleteJob = () => {
    localStorage.removeItem('applied-job');
}

export {
    addToDb,
    removeFromDb,
    getJob,
    deleteJob
}
