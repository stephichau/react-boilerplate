import React from 'react';
import actions from "../../store/actions";
import Icon from '../Icon/Icon';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Trans} from "react-i18next";

const topnav = (props) => {
  const { navbar_expanded, expandNavbar, collapseNavbar, userdrop_expanded, expandUserDrop, collapseUserDrop,
          username, avatar, links } = props;
  const toggleNavbar = () => {
    navbar_expanded ? collapseNavbar() : expandNavbar()
  };
  const toggleUserDrop = () => {
    userdrop_expanded ? collapseUserDrop() : expandUserDrop()
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="navbarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={toggleNavbar}>
        <Icon icon="bars" />
      </button>

      <ul className="navbar-nav ml-auto">
        <li className={"nav-item dropdown no-arrow"+(userdrop_expanded ? " show" : "")}>
          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false" onClick={toggleUserDrop}>
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{ username }</span>
            <img className="img-profile rounded-circle" src={avatar} alt="avatar"/>
          </a>
          <div className={"dropdown-menu dropdown-menu-right shadow animated--grow-in"+(userdrop_expanded ? " show" : "")}
               aria-labelledby="userDropdown">
            { links.map((link, index) => {
                const { divider, href, name, icon } = link;
                if (divider) {
                  return (
                    <div key={index} className="dropdown-divider" />
                  )
                } else {
                  return (
                    <Link key={index} className="dropdown-item" to={href}>
                      <Icon icon={icon} options="fa-sm fa-fw mr-2 text-gray-400"/>
                      <Trans>{name}</Trans>
                    </Link>
                  );
                }
            })}
          </div>
        </li>
      </ul>
    </nav>
  )
}


const mapStateToProps = (state) => (
  {
    userdrop_expanded: state.global.userdrop_expanded,
    navbar_expanded: state.global.navbar_expanded,
    username: state.global.username,
    avatar: state.global.avatar
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    expandNavbar: () => {
      dispatch({ type: actions.ui.EXPAND_NAVBAR })
    },
    collapseNavbar: () => {
      dispatch({ type: actions.ui.COLLAPSE_NAVBAR })
    },
    expandUserDrop: () => {
      dispatch({ type: actions.ui.EXPAND_USER_DROPDOWN })
    },
    collapseUserDrop: () => {
      dispatch({ type: actions.ui.COLLAPSE_USER_DROPDOWN })
    }
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(topnav));
