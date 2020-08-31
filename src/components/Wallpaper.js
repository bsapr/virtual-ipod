import React from 'react';
import { connect } from 'react-redux';
class Wallpaper extends React.Component {
  render() {
    console.log('Wallpaper props ', this.props);
    const { wallpaperPosition, wallpaperList } = this.props.wallpaper;
    return (
      <div id="screenList-body">
        <div id="screenList" style={{ width: '100%' }}>
          {wallpaperList.map((item, index) =>
            index === wallpaperPosition ? (
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
    wallpaper: state.wallpaper,
  };
}
export default connect(mapStateToProps)(Wallpaper);
