import React from 'react';
import { connect } from 'react-redux';

class Playing extends React.Component {
  render() {
    const { playing, played, duration } = this.props.playing;
    const { songList, currentPlayingSongIndex, imgList } = this.props.allSongs;
    return (
      <div id="playingContainer">
        <div id="nowPlaying">
          <div className="song-details">
            <img
              src={require(`../static/${imgList[currentPlayingSongIndex]}.png`)}
              alt="songImg"
            />
            <div>
              <h1>{songList[currentPlayingSongIndex]}</h1>
              {playing && <h5 className="play-pause-nav">Playing</h5>}
              {!playing && <h5 className="play-pause-nav">Paused</h5>}
            </div>
          </div>

          <div className="status">
            {Math.floor(((played / 1) * duration) / 60) +
              ':' +
              Math.floor(((played / 1) * duration) % 60)}
            <input
              id="progress-bar"
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
            />
            {Math.floor(duration / 60) + ':' + Math.floor(duration % 60)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playing: state.playing,
    allSongs: state.allSongs,
  };
}

export default connect(mapStateToProps)(Playing);
