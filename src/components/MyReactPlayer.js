import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { audioDuration, setPlayed, setPlayer } from '../actions';

class MyReactPlayer extends React.Component {
  handleProgress = (state) => {
    console.log('onProgress', state);
    // We only want to update time slider if we are not currently seeking
    this.props.dispatch(setPlayed(state.played));
  };

  handleDuration = (duration) => {
    console.log('onDuration', duration);
    this.props.dispatch(audioDuration(duration));
  };

  handleEnded = () => {
    console.log('onEnded');
  };

  ref = (player) => {
    this.props.dispatch(setPlayer(player));
  };

  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      playbackRate,
      pip,
    } = this.props.playing;

    return (
      <ReactPlayer
        ref={this.ref}
        className="react-player"
        width="0"
        height="0"
        url={url}
        pip={pip}
        playing={playing}
        controls={controls}
        light={light}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        onReady={() => console.log('onReady')}
        onStart={() => console.log('onStart')}
        onBuffer={() => console.log('onBuffer')}
        onSeek={(e) => console.log('onSeek', e)}
        onEnded={this.handleEnded}
        onError={(e) => console.log('onError', e)}
        onProgress={this.handleProgress}
        onDuration={this.handleDuration}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    playing: state.playing,
  };
}
export default connect(mapStateToProps)(MyReactPlayer);
