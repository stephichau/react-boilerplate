import React from 'react';
import { Link } from 'react-router-dom';
import './Brand.scss';
import Icon from '../../Icon/Icon';

const brand = (props) => {
  const { id, className, brandName } = props;
  return (
    <Link to='/' id={id} className={className}>
      <div className="sidebar-brand-icon rotate-n-15">
        <Icon icon="laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">
        {brandName}
      </div>
    </Link>
  )
};

export default brand;