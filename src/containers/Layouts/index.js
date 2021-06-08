import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';

class Layout extends Component {
  render() {
    return (
      <div
        className={`${
          localStorage.getItem('i18nextLng') === 'es'
            ? localStorage.getItem('i18nextLng')
            : ''
        }`}
      >
        <Navbar />
      </div>
    );
  }
}

export default Layout;
