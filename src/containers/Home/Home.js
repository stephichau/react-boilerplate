import React, { Component } from 'react';
import './Home.scss';
import PageHeader from "../../components/PageHeader/PageHeader";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <PageHeader title="home" />
      </div>
    );
  }
}

export default Home;

