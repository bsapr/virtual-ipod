import React from 'react';
import Header from './Header';
import Home from './Home';

class Screen extends React.Component {
  render() {
    return (
      <div id="screen">
        <Header />
        <Home />
      </div>
    );
  }
}

export default Screen;
