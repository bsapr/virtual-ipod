import React from 'react';
import { connect } from 'react-redux';
class AllSongs extends React.Component {
  render() {
    console.log('AllSongs props ', this.props);
    const { songPosition, songList } = this.props.allSongs;
    return (
      <div id="screenList-body">
        <div id="screenList" style={{ width: '100%' }}>
          {songList.map((item, index) =>
            index === songPosition ? (
              <div className="screenListItem activeListItem">{item}</div>
            ) : (
              <div className="screenListItem">{item}</div>
            )
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    allSongs: state.allSongs,
  };
}
export default connect(mapStateToProps)(AllSongs);
