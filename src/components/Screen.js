import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import LockScreen from './LockScreen';
import Videos from './Videos';
import Settings from './Settings';
import Music from './Music';
import Themes from './Themes';
import WheelColor from './WheelColor';
import Wallpaper from './Wallpaper';
import Artists from './Artists';
import Albums from './Albums';
import AllSongs from './AllSongs';
import Playing from './Playing';

class Screen extends React.Component {
  render() {
    return (
      <div id="screen">
        <Header />
        <Switch>
          <Route exact path="/" component={LockScreen} />
          <Route
            path="/Home"
            render={(props) => {
              return <Home {...props} />;
            }}
          />
          <Route
            path="/Playing"
            render={(props) => {
              return <Playing {...props} />;
            }}
          />
          <Route
            path="/NowPlaying"
            render={(props) => {
              return <Playing {...props} />;
            }}
          />
          <Route
            path="/Music"
            render={(props) => {
              return <Music {...props} />;
            }}
          />
          <Route
            path="/Videos"
            render={(props) => {
              return <Videos {...props} />;
            }}
          />
          <Route
            path="/Settings"
            render={(props) => {
              return <Settings {...props} />;
            }}
          />
          <Route
            path="/Themes"
            render={(props) => {
              return <Themes {...props} />;
            }}
          />
          <Route
            path="/WheelColor"
            render={(props) => {
              return <WheelColor {...props} />;
            }}
          />
          <Route
            path="/Wallpaper"
            render={(props) => {
              return <Wallpaper {...props} />;
            }}
          />
          <Route
            path="/AllSongs"
            render={(props) => {
              return <AllSongs {...props} />;
            }}
          />
          <Route
            path="/Artists"
            render={(props) => {
              return <Artists {...props} />;
            }}
          />
          <Route
            path="/Albums"
            render={(props) => {
              return <Albums {...props} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default Screen;
