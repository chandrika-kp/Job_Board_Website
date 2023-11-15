import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../Redux/Actions/action';


const JobsList = () => {

    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobsList);
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    return (
        <div>
            {jobs.map((job) => (
                <p key={job._id}>{job.title}</p>
            ))}
        </div>
    );
}

export default JobsList