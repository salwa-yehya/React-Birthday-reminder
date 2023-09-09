import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className='container'>
    <Link to="/list"> <h1>All Pepole</h1></Link>
    <br />
    <Link to="/bd"><h1>Birthday </h1></Link>
    </div>
  )
}

export default Home