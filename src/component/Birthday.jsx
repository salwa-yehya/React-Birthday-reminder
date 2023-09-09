import React, { useState } from 'react'
import Allbir from './Allbir'
import { data } from '../data'
import { Link } from 'react-router-dom'
const Birthday = () => {
   return (
    <div className="container">
      <h2>Today  Birthday </h2>
      <br />
       <Allbir pepole={data} />
       <br />
       <Link to="/list">Back to all pepole </Link>
       <Link to="/">Back Home </Link>
       <br />
    </div>
  )
}

export default Birthday