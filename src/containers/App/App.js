import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import TopNav from '../../components/Topnav/Topnav';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

import './App.scss';

class App extends Component {
    render() {
      const sections = [
        {
          heading: 'examples',
          items: [
            { name: 'static pages',
              icon: 'fas fa-fw fa-cog',
              items: [
                { name: 'home', href: '/', icon: 'fas fa-fw fa-home' },
                { name: '404', href: '/404' },
                { name: '500', href: '/500' }
              ]
            },
            { name: 'dynamic pages',
              icon: 'fas fa-fw fa-cog',
              items: [
                { name: 'users', href: '/users' },
                { name: 'colors', href: '/colors' }
              ]
            }
          ]
        }
      ];
  
      const links = [
        { name: 'profile', href: '#', icon: 'user' },
        { name: 'settings', href: '#', icon: 'cogs' },
        { name: 'activity log', href: '#', icon: 'list' },
        { divider: true },
        { name: 'log out', href: '#', icon: 'sign-out-alt' }
      ];
  
      return (
        <div className="App">
          <div id="wrapper">
            <Navbar sections={sections} />
            <div id="content-wrapper" className="d-flex flex-column">
              <TopNav links={links} />
            </div>
          </div>
          <ScrollToTop />
        </div>
      );
    }
  }
  
  export default App;