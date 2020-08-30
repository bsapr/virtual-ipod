import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const { homePosition, homeList } = this.props.home;
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

        <div id="screenImage"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

export default connect(mapStateToProps)(Home);
