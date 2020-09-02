import {
  PLAY_PAUSE,
  SEEK_FORWARD,
  SEEK_BACKWARD,
  AUDIO_DURATION,
  SET_PLAYED,
  SET_PLAYER,
  NEXT_SONG,
  PREVIOUS_SONG,
} from '../actions';

import defaultSong from '../static/songs/Shape of You.mp3';

const initialPlayingState = {
  url: defaultSong,
  pip: false,
  playing: false,
  controls: false,
  light: false,
  volume: 0.8,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
  player: null,
};

export default function playing(state = initialPlayingState, action) {
  switch (action.type) {
    case PLAY_PAUSE:
      return {
        ...state,
        playing: !state.playing,
      };
    case NEXT_SONG:
      console.log('Before next song :- ', state.url);
      return {
        ...state,
        url: require(`../static/songs/${action.songName}.mp3`),
        played: 0,
        playing: true,
      };
    case PREVIOUS_SONG:
      console.log('Before previous song :- ', state.url);
      return {
        ...state,
        url: require(`../static/songs/${action.songName}.mp3`),
        played: 0,
        playing: true,
      };
    case SEEK_FORWARD:
      console.log('Before seeeking state :- ', state.played);
      return {
        ...state,
        played:
          state.played === state.duration ? state.duration : state.played + 0.1,
      };
    case SEEK_BACKWARD:
      return {
        ...state,
        played: state.played === 0 ? 0 : state.played - 0.1,
      };
    case AUDIO_DURATION:
      return {
        ...state,
        duration: action.duration,
      };
    case SET_PLAYED:
      console.log('in setallstate reducer ', action);
      return {
        ...state,
        played: action.played,
      };
    case SET_PLAYER:
      console.log('in set player reducer ', action);
      return {
        ...state,
        player: action.player,
      };
    default:
      return state;
  }
}
