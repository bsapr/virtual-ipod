import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    console.log('Home Position : ', this.props.homeList);
    const { homePosition } = this.props.homeList;
    return (
      <div id="screenList-body">
        <div id="screenList">
          {homePosition === 0 ? (
            <div
              className="screenListItem"
              style={{ backgroundColor: '#7575e2', color: 'white' }}
            >
              Now Playing
            </div>
          ) : (
            <div className="screenListItem">Now Playing</div>
          )}
          {homePosition === 1 ? (
            <div
              className="screenListItem"
              style={{ backgroundColor: '#7575e2', color: 'white' }}
            >
              Music
            </div>
          ) : (
            <div className="screenListItem">Music</div>
          )}
          {homePosition === 2 ? (
            <div
              className="screenListItem"
              style={{ backgroundColor: '#7575e2', color: 'white' }}
            >
              Game
            </div>
          ) : (
            <div className="screenListItem">Game</div>
          )}
          {homePosition === 3 ? (
            <div
              className="screenListItem"
              style={{ backgroundColor: '#7575e2', color: 'white' }}
            >
              Game
            </div>
          ) : (
            <div className="screenListItem">Game</div>
          )}
        </div>

        <div id="screenImage"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeList: state.homeList,
  };
}

export default connect(mapStateToProps)(Home);
