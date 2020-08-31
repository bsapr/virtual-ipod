import React from 'react';
import { connect } from 'react-redux';
class WheelColor extends React.Component {
  render() {
    console.log('WheelColor props ', this.props);
    const { wheelColorPosition, wheelColorList } = this.props.wheelColor;
    return (
      <div id="screenList-body">
        <div id="screenList" style={{ width: '100%' }}>
          {wheelColorList.map((item, index) =>
            index === wheelColorPosition ? (
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
    wheelColor: state.wheelColor,
  };
}
export default connect(mapStateToProps)(WheelColor);
