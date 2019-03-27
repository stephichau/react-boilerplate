import React from 'react';
import ReactDOM from 'react-dom';
import Topnav from './Topnav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Topnav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
