import React from 'react';
import ZingTouch from 'zingtouch';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import LongPressable from 'react-longpressable';
import { nextSong, previousSong, updatePlayingSongIndex } from '../actions';

class Wheel extends React.Component {
  componentDidMount() {
    var menuElement = document.getElementById('menu');
    var menuRegion = new ZingTouch.Region(menuElement);
    const menuTapControl = this.menuTapControl;
    menuRegion.bind(menuElement, 'tap', function (e) {
      menuTapControl(e);
    });

    var forwardElement = document.getElementById('forward');
    var forwardRegion = new ZingTouch.Region(forwardElement);
    const forwardTapControl = this.forwardTapControl;
    forwardRegion.bind(forwardElement, 'tap', function (e) {
      forwardTapControl(e);
    });

    var backwardElement = document.getElementById('backward');
    var backwardRegion = new ZingTouch.Region(backwardElement);
    const backwardTapControl = this.backwardTapControl;
    backwardRegion.bind(backwardElement, 'tap', function (e) {
      backwardTapControl(e);
    });
  }

  menuTapControl = (e) => {
    console.log('Menu pressed');
    if (this.props.location.pathname === '/') {
      return;
    }
    this.props.history.goBack();
  };

  onLongPressBackward = (e) => {
    console.log('Long pressed Backward.');
    if (this.props.location.pathname !== '/NowPlaying') {
      return;
    }
    this.handleSeekBackward();
  };
  onLongPressForward = (e) => {
    console.log('Long pressed Forward.');
    if (this.props.location.pathname !== '/NowPlaying') {
      return;
    }
    this.handleSeekForward();
  };
  handleSeekBackward = () => {
    const { played, player } = this.props.playing;
    player.seekTo(parseFloat(played - 0.1));
  };
  handleSeekForward = () => {
    const { played, player } = this.props.playing;
    player.seekTo(parseFloat(played + 0.1));
  };

  forwardTapControl = (e) => {
    console.log('Forward pressed');
    if (this.props.location.pathname === '/') {
      return;
    }
    let { songList, currentPlayingSongIndex } = this.props.allSongs;
    currentPlayingSongIndex = (currentPlayingSongIndex + 1) % songList.length;
    let songName = songList[currentPlayingSongIndex];
    console.log(songName);
    this.props.dispatch(nextSong(songName));
    this.props.dispatch(updatePlayingSongIndex(currentPlayingSongIndex));
  };

  backwardTapControl = (e) => {
    console.log('Backward pressed');
    if (this.props.location.pathname === '/') {
      return;
    }
    let { songList, currentPlayingSongIndex } = this.props.allSongs;
    currentPlayingSongIndex =
      (currentPlayingSongIndex - 1 + songList.length) % songList.length;
    let songName = songList[currentPlayingSongIndex];
    console.log(songName);
    this.props.dispatch(previousSong(songName));
    this.props.dispatch(updatePlayingSongIndex(currentPlayingSongIndex));
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
        <LongPressable
          onLongPress={this.onLongPressBackward}
          longPressTime={1000}
        >
          <div id="backward">
            <i className="fas fa-fast-backward"></i>
          </div>
        </LongPressable>
        <LongPressable
          onLongPress={this.onLongPressForward}
          longPressTime={1000}
        >
          <div id="forward">
            <i className="fas fa-fast-forward"></i>
          </div>
        </LongPressable>
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
    playing: state.playing,
    allSongs: state.allSongs,
  };
}

export default connect(mapStateToProps)(withRouter(Wheel));
