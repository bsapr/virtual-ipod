import { combineReducers } from 'redux';
import home from './home';
import settings from './settings';
import themes from './themes';
import wheelColor from './wheelColor';
import wallpaper from './wallpaper';
import music from './music';
import allSongs from './allSongs';
import playing from './playing';

export default combineReducers({
  home,
  settings,
  themes,
  wheelColor,
  wallpaper,
  music,
  allSongs,
  playing,
});
