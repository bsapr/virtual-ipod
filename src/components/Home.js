import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const { homePosition, homeList } = this.props.home;
    const { imgList, currentPlayingSongIndex } = this.props.allSongs;
    return (
      <div id="screenList-body">
        <div id="screenList">
          {homeList.map((item, index) =>
            index === homePosition ? (
              <div className="screenListItem activeListItem">{item}</div>
            ) : (
              <div className="screenListItem">{item}</div>
            )
          )}
        </div>

        {homeList[homePosition] === 'Now Playing' ? (
          <img
            id="screenImage"
            src={require(`../static/${imgList[currentPlayingSongIndex]}.png`)}
            alt="img"
          ></img>
        ) : (
          <div
            id="screenImage"
            className={homeList[homePosition].replace(/\s/g, '')}
          ></div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home,
    allSongs: state.allSongs,
  };
}

export default connect(mapStateToProps)(Home);
