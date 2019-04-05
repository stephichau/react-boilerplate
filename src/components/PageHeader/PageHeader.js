import React from 'react';
import {Trans} from "react-i18next";
import Icon from '../Icon/Icon';
import Link from 'next/link'; // "react-router-dom";

const page_header = (props) => {
  const { title, button } = props;

  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800"><Trans>{ title }</Trans></h1>
      { button ? (
        <Link href={button.href}>
          <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> <Icon icon={button.icon} options="fa-sm text-white-50" /> <Trans>{ button.name }</Trans> </a>
        </Link>
      ) : null }
    </div>
  );
};

export default page_header;