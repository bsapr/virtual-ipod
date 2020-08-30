import React from 'react';
import ZingTouch from 'zingtouch';
import { connect } from 'react-redux';
import Screen from './Screen';
import Controller from './Controller';
import appendScript from '../utils';
import { incrementHomePosition, decrementHomePosition } from '../actions';

class App extends React.Component {
  componentDidMount() {
    appendScript('https://kit.fontawesome.com/66b7ea86d8.js');
    var myElement = document.getElementById('wheel');
    var myRegion = new ZingTouch.Region(myElement);
    const wheelControll = this.wheelControll;
    myRegion.bind(myElement, 'rotate', function (e) {
      wheelControll(e);
    });
  }

  wheelControll = (e) => {
    console.log('rotate gesture emitted');
    if (e.detail.distanceFromOrigin === 0) {
      this.angle = e.detail.angle;
    }

    if (Math.abs(this.angle - e.detail.angle) >= 345) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast < 0) {
        this.updateActiveMenu(1);
      } else {
        this.updateActiveMenu(0);
      }
    } else if (Math.abs(this.angle - e.detail.angle) > 15) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast > 0) {
        this.updateActiveMenu(1);
      } else {
        this.updateActiveMenu(0);
      }
    }
  };

  updateActiveMenu = (value) => {
    if (value === 1) {
      this.props.dispatch(incrementHomePosition());
    } else {
      this.props.dispatch(decrementHomePosition());
    }
  };
  render() {
    return (
      <div id="container">
        <Screen />
        <Controller />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
