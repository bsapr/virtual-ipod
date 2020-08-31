import {
  INCREMENT_WALLPAPER_POSITION,
  DECREMENT_WALLPAPER_POSITION,
} from '../actions';

const initialWallpaperState = {
  wallpaperPosition: 0,
  wallpaperList: ['Galaxy', 'Landscape', 'Infra'],
};
export default function wallpaper(state = initialWallpaperState, action) {
  switch (action.type) {
    case INCREMENT_WALLPAPER_POSITION:
      return {
        ...state,
        wallpaperPosition:
          (state.wallpaperPosition + 1) % state.wallpaperList.length,
      };
    case DECREMENT_WALLPAPER_POSITION:
      return {
        ...state,
        wallpaperPosition:
          (state.wallpaperPosition - 1 + state.wallpaperList.length) %
          state.wallpaperList.length,
      };
    default:
      return state;
  }
}
