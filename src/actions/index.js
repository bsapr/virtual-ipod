export const INCREMENT_HOME_POSITION = 'INCREMENT_HOME_POSITION';
export const DECREMENT_HOME_POSITION = 'DECREMENT_HOME_POSITION';
export const INCREMENT_SETTING_POSITION = 'INCREMENT_SETTING_POSITION';
export const DECREMENT_SETTING_POSITION = 'DECREMENT_SETTING_POSITION';
export const INCREMENT_THEME_POSITION = 'INCREMENT_THEME_POSITION';
export const DECREMENT_THEME_POSITION = 'DECREMENT_THEME_POSITION';
export const INCREMENT_WHEELCOLOR_POSITION = 'INCREMENT_WHEELCOLOR_POSITION';
export const DECREMENT_WHEELCOLOR_POSITION = 'DECREMENT_WHEELCOLOR_POSITION';
export const INCREMENT_WALLPAPER_POSITION = 'INCREMENT_WALLPAPER_POSITION';
export const DECREMENT_WALLPAPER_POSITION = 'DECREMENT_WALLPAPER_POSITION';

export function incrementHomePosition() {
  return {
    type: INCREMENT_HOME_POSITION,
  };
}

export function decrementHomePosition() {
  return {
    type: DECREMENT_HOME_POSITION,
  };
}

export function incrementSettingsPosition() {
  return {
    type: INCREMENT_SETTING_POSITION,
  };
}

export function decrementSettingsPosition() {
  return {
    type: DECREMENT_SETTING_POSITION,
  };
}

export function incrementThemesPosition() {
  return {
    type: INCREMENT_THEME_POSITION,
  };
}

export function decrementThemesPosition() {
  return {
    type: DECREMENT_THEME_POSITION,
  };
}

export function incrementWheelColorPosition() {
  return {
    type: INCREMENT_WHEELCOLOR_POSITION,
  };
}

export function decrementWheelColorPosition() {
  return {
    type: DECREMENT_WHEELCOLOR_POSITION,
  };
}

export function incrementWallpaperPosition() {
  return {
    type: INCREMENT_WALLPAPER_POSITION,
  };
}

export function decrementWallpaperPosition() {
  return {
    type: DECREMENT_WALLPAPER_POSITION,
  };
}
