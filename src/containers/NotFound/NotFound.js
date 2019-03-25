import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import './NotFound.scss';

class NotFound extends Component {
  render() {
    return (
      <div className='container'>
        <h2><Trans>not found</Trans></h2>
      </div>
    );
  }
}

export default NotFound;
