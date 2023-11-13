import React from 'react'
import Carousel from '../pages/Carousel'
import { Navbar } from '../pages/Navbar'
import JobsList from './JobsList'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <JobsList />
    </>
  )
}
