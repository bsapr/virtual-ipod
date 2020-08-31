import React from 'react';
import { connect } from 'react-redux';
import Screen from './Screen';
import Controller from './Controller';
import appendScript from '../utils';

class App extends React.Component {
  componentDidMount() {
    appendScript('https://kit.fontawesome.com/66b7ea86d8.js');
  }

  render() {
    console.log(this.props);
    let { themes } = this.props;
    let { themeList, themePosition } = themes;
    return (
      <div
        id="container"
        className={themeList[themePosition].replace(/\s/g, '')}
      >
        <Screen />
        <Controller />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    themes: state.themes,
  };
}
export default connect(mapStateToProps)(App);
