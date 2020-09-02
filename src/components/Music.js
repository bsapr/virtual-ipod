import React from 'react';
import { connect } from 'react-redux';
class Music extends React.Component {
  render() {
    console.log('Music props ', this.props);
    const { musicPosition, musicList } = this.props.music;
    return (
      <div id="screenList-body">
        <div id="screenList" style={{ width: '100%' }}>
          {musicList.map((item, index) =>
            index === musicPosition ? (
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
    music: state.music,
  };
}
export default connect(mapStateToProps)(Music);
