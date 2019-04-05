import React from 'react';
import './Navbar.scss';
import Brand from './Brand/Brand';
import Divider from './Divider/Divider';
import Item from './Item/Item';
// import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../../store/actions";
import {Trans} from "react-i18next";

const navbar = (props) => {
  const { sections, expanded, expand, collapse } = props;
  const toggle = () => {
    expanded ? collapse() : expand()
  };

  return (
    <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"+(expanded ? "" : " toggled") }
        id="accordionSidebar">
      <Brand className="sidebar-brand d-flex align-items-center justify-content-center"
             brandName="Seli React Boilerplate"/>

      <Divider/>

      {sections.map((section, index) => {
        const { heading } = section;

        return (
          <div key={index}>
            {heading ? (
              <div className="sidebar-heading">
                <Trans>{heading}</Trans>
              </div>
            ) : null}

            {section.items.map((item, index) => {
              const {href, items, icon, name} = item;
              return (
                <Item key={index} id={index} href={href} items={items} icon={icon} name={name}/>
              );
            })}
          </div>
        )
      })}

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggle} />
      </div>
    </ul>
  )
};

const mapStateToProps = (state) => {
  return {
    expanded: state.global.navbar_expanded
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    expand: () => {
      dispatch({ type: actions.ui.EXPAND_NAVBAR })
    },
    collapse: () => {
      dispatch({ type: actions.ui.COLLAPSE_NAVBAR })
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
