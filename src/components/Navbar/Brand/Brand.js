import React from 'react';
import Link from 'next/link'; // 'react-router-dom';
import './Brand.scss';
import Icon from '../../Icon/Icon';

const brand = (props) => {
  const { id, className, brandName } = props;
  return (
    <Link href='/'>
      <a id={id} className={className}>
        <div className="sidebar-brand-icon rotate-n-15">
          <Icon icon="laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          {brandName}
        </div>
      </a>
    </Link>
  )
};

export default brand;