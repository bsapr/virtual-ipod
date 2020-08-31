import React, { Component } from 'react';
import ZingTouch from 'zingtouch';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Wheel from './Wheel';
import {
  incrementHomePosition,
  decrementHomePosition,
  incrementSettingsPosition,
  decrementSettingsPosition,
  incrementThemesPosition,
  decrementThemesPosition,
  incrementWheelColorPosition,
  decrementWheelColorPosition,
  incrementWallpaperPosition,
  decrementWallpaperPosition,
} from '../actions';

class Controller extends Component {
  componentDidMount() {
    var wheelElement = document.getElementById('wheel');
    var wheelRegion = new ZingTouch.Region(wheelElement);
    const wheelControl = this.wheelControl;
    wheelRegion.bind(wheelElement, 'rotate', function (e) {
      wheelControl(e);
    });

    var selectElement = document.getElementById('select');
    var selectRegion = new ZingTouch.Region(selectElement);
    const selectTapControl = this.selectTapControl;
    selectRegion.bind(selectElement, 'tap', function (e) {
      selectTapControl(e);
    });
  }

  selectTapControl = (e) => {
    let { homeList, homePosition } = this.props.home;
    let { settingList, settingPosition } = this.props.settings;
    if (this.props.location.pathname === '/') {
      this.props.history.push('/Home');
    } else if (this.props.location.pathname === '/Home') {
      this.props.history.push(`${homeList[homePosition].replace(/\s/g, '')}`);
    } else if (this.props.location.pathname === '/Settings') {
      this.props.history.push(
        `${settingList[settingPosition].replace(/\s/g, '')}`
      );
    }
  };

  wheelControl = (e) => {
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
    if (this.props.location.pathname === '/Home') {
      if (value === 1) {
        this.props.dispatch(incrementHomePosition());
      } else {
        this.props.dispatch(decrementHomePosition());
      }
    } else if (this.props.location.pathname === '/Settings') {
      if (value === 1) {
        this.props.dispatch(incrementSettingsPosition());
      } else {
        this.props.dispatch(decrementSettingsPosition());
      }
    } else if (this.props.location.pathname === '/Themes') {
      if (value === 1) {
        this.props.dispatch(incrementThemesPosition());
      } else {
        this.props.dispatch(decrementThemesPosition());
      }
    } else if (this.props.location.pathname === '/WheelColor') {
      if (value === 1) {
        this.props.dispatch(incrementWheelColorPosition());
      } else {
        this.props.dispatch(decrementWheelColorPosition());
      }
    } else if (this.props.location.pathname === '/Wallpaper') {
      if (value === 1) {
        this.props.dispatch(incrementWallpaperPosition());
      } else {
        this.props.dispatch(decrementWallpaperPosition());
      }
    }
  };

  render() {
    return (
      <div id="controller">
        <Wheel />
        <div id="select"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home,
    settings: state.settings,
    themes: state.themes,
  };
}

export default connect(mapStateToProps)(withRouter(Controller));
