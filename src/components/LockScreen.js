import React, { Component } from 'react';
import { connect } from 'react-redux';

class LockedScreen extends Component {
  render() {
    let { wallpaper } = this.props;
    console.log(wallpaper);
    let { wallpaperPosition, wallpaperList } = wallpaper;
    return (
      <div
        id="lock-screen"
        className={wallpaperList[wallpaperPosition].replace(/\s/g, '')}
      >
        <i className="fas fa-lock"></i>
        <div className="mt5">Press Center Button to Unlock!</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wallpaper: state.wallpaper,
  };
}

export default connect(mapStateToProps)(LockedScreen);
