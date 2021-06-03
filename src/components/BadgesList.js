import React from 'react'
import { Link } from 'react-router-dom'
import './styles/BadgesList.css'
import Gravatar from './Gravatar'

class BadgesList extends React.Component{
  render(){

    if(this.props.badges.length === 0){
      return (
        <div>
          <h3>No Badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">Create new badge</Link>
        </div>
      )
    }

    return(
      <ul className="list-unstyled">
        {
          this.props.badges.map( badge => {
            return (
            <li key={badge.id}>
              <div className="card__container">
                <div className="badge__container-img">
                  {
                    //<img className="badge__img" src={badge.avatarUrl} alt="Avatar"/>
                  }
                  <Gravatar className="Badge__avatar" email={badge.email} alt="Avatar"/>
                </div>

                <div className="badge__container-details">
                  <p className="badge-name">{badge.firstName} {badge.lastName}</p>
                  <p className="badge-twitter">@{badge.twitter}</p>
                  <p className="badge-job">{badge.jobTitle}</p>
                </div>
              </div>
            </li>)
          })
        }
      </ul>
    )
  }
}

export default BadgesList