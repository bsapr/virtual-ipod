import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
class Themes extends React.Component {
  render() {
    console.log('Themes props ', this.props);
    const { themePosition, themeList } = this.props.themes;
    return (
      <div id="screenList-body">
        <div id="screenList" style={{ width: '100%' }}>
          {themeList.map((item, index) =>
            index === themePosition ? (
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
    themes: state.themes,
  };
}
export default connect(mapStateToProps)(withRouter(Themes));
