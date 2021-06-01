import React from 'react';
import './styles/HomePage.css'
import platziconf from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'
import { Link } from 'react-router-dom';

function HomePage(){
  return (
    <div className="container-fluid home__container">
      <div className="row container m-auto h-100 d-flex align-items-center">
        <div className="col-4">
          <img src={platziconf} alt="platzi conf"/>
          <h1>PRINT YOUR BADGES</h1>
          <p>The easiest way to manage your conference</p>
          <Link to="/badges" className="btn btn-primary">Start now</Link>
        </div>

        <div className="col-8 text-center">
          <img src={astronauts} alt="astronauts"/>
        </div>
      </div>
    </div>
  )
}

export default HomePage