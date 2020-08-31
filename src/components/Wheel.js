import React from 'react';
import ZingTouch from 'zingtouch';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Wheel extends React.Component {
  componentDidMount() {
    var menuElement = document.getElementById('menu');
    var menuRegion = new ZingTouch.Region(menuElement);
    const menuTapControl = this.menuTapControl;
    menuRegion.bind(menuElement, 'tap', function (e) {
      menuTapControl(e);
    });
  }

  menuTapControl = (e) => {
    console.log('Menu pressed');
    this.props.history.goBack();
  };

  render() {
    let { wheelColor } = this.props;
    let { wheelColorPosition, wheelColorList } = wheelColor;
    return (
      <div
        id="wheel"
        className={wheelColorList[wheelColorPosition].replace(/\s/g, '')}
      >
        <div id="menu">MENU</div>
        <div id="backward">
          <i className="fas fa-fast-backward"></i>
        </div>
        <div id="forward">
          <i className="fas fa-fast-forward"></i>
        </div>
        <div id="play-pause">
          <i className="fas fa-play"></i>
          <i className="fas fa-pause"></i>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wheelColor: state.wheelColor,
  };
}

export default connect(mapStateToProps)(withRouter(Wheel));
