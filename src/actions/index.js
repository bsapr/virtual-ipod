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
export const INCREMENT_MUSIC_POSITION = 'INCREMENT_MUSIC_POSITION';
export const DECREMENT_MUSIC_POSITION = 'DECREMENT_MUSIC_POSITION';
export const INCREMENT_SONG_POSITION = 'INCREMENT_SONG_POSITION';
export const DECREMENT_SONG_POSITION = 'DECREMENT_SONG_POSITION';
export const PLAY_PAUSE = 'PLAY_PAUSE';
export const URL_LOAD = 'URL_LOAD';
export const SEEK_FORWARD = 'SEEK_FORWARD';
export const SEEK_BACKWARD = 'SEEK_BACKWARD';
export const AUDIO_DURATION = 'AUDIO_DURATION';
export const SET_PLAYED = 'SET_PLAYED';
export const SET_PLAYER = 'SET_PLAYER';
export const UPDTE_PLAYING_SONG_INDEX = 'UPDTE_PLAYING_SONG_INDEX';
export const NEXT_SONG = 'NEXT_SONG';
export const PREVIOUS_SONG = 'PREVIOUS_SONG';

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
export function incrementMusicPosition() {
  return {
    type: INCREMENT_MUSIC_POSITION,
  };
}
export function decrementMusicPosition() {
  return {
    type: DECREMENT_MUSIC_POSITION,
  };
}
export function incrementSongPosition() {
  return {
    type: INCREMENT_SONG_POSITION,
  };
}
export function decrementSongPosition() {
  return {
    type: DECREMENT_SONG_POSITION,
  };
}
export function updatePlayingSongIndex(currentPlayingSongIndex) {
  return {
    type: UPDTE_PLAYING_SONG_INDEX,
    currentPlayingSongIndex,
  };
}
export function playPause() {
  return {
    type: PLAY_PAUSE,
  };
}
export function urlLoad(url) {
  return {
    type: URL_LOAD,
    url,
  };
}
export function seekForward() {
  return {
    type: SEEK_FORWARD,
  };
}
export function seekBackward() {
  return {
    type: SEEK_BACKWARD,
  };
}
export function audioDuration(duration) {
  return {
    type: AUDIO_DURATION,
    duration,
  };
}
export function setPlayed(played) {
  return {
    type: SET_PLAYED,
    played,
  };
}
export function setPlayer(player) {
  return {
    type: SET_PLAYER,
    player,
  };
}
export function nextSong(songName) {
  return {
    type: NEXT_SONG,
    songName,
  };
}
export function previousSong(songName) {
  return {
    type: PREVIOUS_SONG,
    songName,
  };
}
