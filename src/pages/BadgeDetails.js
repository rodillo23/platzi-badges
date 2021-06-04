import React from 'react'
import "./styles/BadgeDetails.css";
import Logo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
import Modal from '../components/Modal'

function BadgeDetails({badge}){
  return(
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={Logo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">Edit</Link>  
            </div>

            <div>
              <button className="btn btn-danger">Delete</button>
              <Modal isOpen={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit similique voluptate nobis dolorem quo nihil expedita, quod amet repudiandae esse placeat soluta quam animi voluptas adipisci praesentium eum doloribus!</Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeDetails