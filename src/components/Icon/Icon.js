import React from 'react';
import './Icon.scss';

const icon = (props) => {
  const { id, icon, options } = props;
  return (
    <i id={id} className={"fas fa-fw fa-"+icon+" "+options} />
  )
};

export default icon;