// import React from 'react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../Redux/Actions/action';

export const JobContainer = () => {

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobsList);
  const [selectedTitle, setSelectedTitle] = useState('');

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch]);

  const jobTitles = [...new Set(jobs.map((job) => job.title))];
  console.log(jobTitles)

  const displayLess = jobs.slice(0, 5);
  console.log(displayLess)

  const filteredJobs = selectedTitle
  ? displayLess.filter((job) => job.title === selectedTitle)
  : displayLess;


  return (
    <div className="container">
      <div className='sideBlock'>
        <h3 className='text-center'>Filter</h3>
        <p>Select Job Type:</p>
        <select onChange={e=>setSelectedTitle(e.target.value)}>
          <option value="">All</option>
          {jobTitles.map((title) => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>
      </div>
      <div className='jobCardBlock'>
        <h1 className='text-center'>Job Openings</h1>
        {filteredJobs.map((job) => {
          return (
            <React.Fragment key={job._id}>
              <div className="eachJob">
                <h3 className="jobTitle">{job.title}</h3>
                <p>{job.company}</p>
              </div>
              <div className="col-md-4 mb-4">
              </div>
            </React.Fragment>
          )
        }
        )}
      </div>
    </div>
  )
}
