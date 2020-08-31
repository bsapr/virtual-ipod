import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import LockScreen from './LockScreen';
import NowPlaying from './NowPlaying';
import Videos from './Videos';
import Settings from './Settings';
import Music from './Music';
import Themes from './Themes';
import WheelColor from './WheelColor';
import Wallpaper from './Wallpaper';

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
            path="/NowPlaying"
            render={(props) => {
              return <NowPlaying {...props} />;
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
        </Switch>
      </div>
    );
  }
}

export default Screen;
