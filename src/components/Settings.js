import React from 'react';
import { connect } from 'react-redux';
class Settings extends React.Component {
  render() {
    console.log('Settings props ', this.props);
    const { settingPosition, settingList } = this.props.settings;
    return (
      <div id="screenList-body">
        <div id="screenList" style={{ width: '100%' }}>
          {settingList.map((item, index) =>
            index === settingPosition ? (
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
    settings: state.settings,
  };
}
export default connect(mapStateToProps)(Settings);
