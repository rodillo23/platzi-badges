import React from "react";

import api from "../api";
import Loading from "../components/PageLoading";
import BadgeDetails from "./BadgeDetails";



class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.getBadge();
  }

  getBadge = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      console.log(data);
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {

    if (this.state.loading) {
      return <Loading />;
    }
    
    return (
      <BadgeDetails badge={this.state.data}/>
    );
  }
}

export default BadgeDetailsContainer;
