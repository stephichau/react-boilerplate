import React from 'react';
import Icon from '../Icon/Icon';

const scroll_to_top = () => {
  return (
    <a className="scroll-to-top rounded" href="#page-top" style={{ display: "inline" }}>
      <Icon icon="angle-up" />
    </a>
  )
};

export default scroll_to_top;