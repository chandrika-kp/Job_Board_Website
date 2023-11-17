import React from 'react'
import Carousel from '../pages/Carousel'
import { Navbar } from '../pages/Navbar'
import { JobContainer } from './JobContainer'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <JobContainer/>
    </>
  )
}
