import React, { Component } from "react";
import Icon from '../../Icon/Icon';
import Link from 'next/link'; // 'react-router-dom';
import { Trans } from "react-i18next";

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    }
  }

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  };

  render() {
    const {id, href, items, icon, name} = this.props;
    const { expanded } = this.state;

    if (items && items.length !== 0)
      return (
        <li className="nav-item">
          <a className={ expanded ? "nav-link" : "nav-link collapsed"} href="#" data-toggle="collapse" data-target={"#collapse" + id}
                aria-expanded="false" aria-controls={"collapse" + id} onClick={this.toggleExpand}>
            <Icon icon="cog"/>
            <span><Trans>{name}</Trans></span>
          </a>
          <div id={"collapse" + id} className={expanded ? "collapse show" : "collapse" } data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              {items.map((item, index) => {
                const {href, name} = item;
                return (
                  <Link href={href}>
                    <a><Trans key={index} className="collapse-item">{name}</Trans> </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </li>
      );
    else
      return (
        <li className="nav-item">
          <Link href={href}>
            <a className="nav-link">
              {icon ? <Icon className="fas fa-fw fa-chart-area"/> : null}
              <span><Trans>{name}</Trans></span>
            </a>
          </Link>
        </li>
      );
  }
}

export default Item;