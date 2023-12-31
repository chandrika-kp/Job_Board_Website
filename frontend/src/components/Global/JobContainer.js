// import React from 'react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../Redux/Actions/action';
import { NavLink } from 'react-router-dom';

export const JobContainer = () => {

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobsList);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch]);

  const jobTitles = [...new Set(jobs.map((job) => job.title))].sort();
  console.log(jobTitles)

  const jobLocation = [...new Set(jobs.map((job) => job.location))].sort();
  console.log(jobLocation)

  const displayLess = jobs.slice(0, 15);
  console.log(displayLess)

  const filteredJobs = displayLess.filter((job) =>
    (selectedTitle ? job.title === selectedTitle : true) &&
    (selectedLocation ? job.location === selectedLocation : true)
  );

  return (
    <div className="container">
      <div className='sideBlock'>
        <h3 className='text-center'>Filter</h3>
        <p>Select Job Type:</p>
        <select style={{ width: '85%' }} onChange={e => setSelectedTitle(e.target.value)}>
          <option value="">All</option>
          {jobTitles.map((title) => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>

        <p>Select Job Type:</p>
        <select style={{ width: '85%' }} onChange={e => setSelectedLocation(e.target.value)}>
          <option value="">All</option>
          {jobLocation.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>

      </div>
      <div className='jobCardBlock'>
        <h1 className='text-center'>Job Openings</h1>
        {
          filteredJobs.length === 0
            ? <p className='NoMatch text-center fs-3 m-1'>No jobs found</p>
            : (filteredJobs.map((job) => {
              return (
                <React.Fragment key={job._id}>
                  <div className="eachJob">
                    <h3 className="jobTitle">{job.title}</h3>
                    <p>{job.company}</p>
                    <p>{job.about}</p>
                    <p>Salary : {job.salary}</p>
                    <p>No of openings : {job.openings}</p>
                  </div>
                  <div className="col-md-4 mb-4">
                  </div>
                </React.Fragment>
              )
            })
            )
        }

        <NavLink className="nav-link active text-end fs-3" type='button' onClick={() => alert('Please Login')} to="/login"> + more jobs</NavLink>



      </div>
    </div>
  )
}
