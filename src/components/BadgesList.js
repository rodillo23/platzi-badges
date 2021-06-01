import React from 'react'
import './styles/BadgesList.css'

class BadgesList extends React.Component{
  render(){
    return(
      <ul className="list-unstyled">
        {
          this.props.badges.map( badge => {
            return (
            <li key={badge.id}>
              <div className="card__container">
                <div className="badge__container-img">
                  <img className="badge__img" src={badge.avatarUrl} alt="Avatar"/>
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