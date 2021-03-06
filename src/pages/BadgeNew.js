import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from '../components/PageLoading'
import "./styles/BadgeNew.css";
import logo from "../images/platziconf-logo.svg";
import api from '../api'

class BadgeNew extends React.Component {

  state = {
    loading: false,
    error: null,
    form : {
      firstName : '',
      lastName : '',
      email : '',
      jobTitle : '',
      twitter : '',
    }
  }

  handleChange = (e) => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name] : e.target.value
      }
    })
  }

  handleSubmit = async (e)=>{
    e.preventDefault()
    this.setState({loading: true, error: null})
    try {
      await api.badges.create(this.state.form)
      this.setState({loading: false})

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({loading: false, error: error.message})
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero container-fluid">  
          <div className="container d-flex justify-content-center">
            <img className="img-fluid" src={logo} alt="" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            {this.state.loading && <PageLoading/>}
            <div className="col-6">
              <Badge
                avatarUrl='https://www.gravatar.com/avatar/?d=identicon'
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                email={this.state.form.email}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle}
              />
            </div>

            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
