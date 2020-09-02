import { INCREMENT_MUSIC_POSITION, DECREMENT_MUSIC_POSITION } from '../actions';

const initialMusicState = {
  musicPosition: 0,
  musicList: ['All Songs', 'Artists', 'Albums'],
};
export default function setting(state = initialMusicState, action) {
  switch (action.type) {
    case INCREMENT_MUSIC_POSITION:
      return {
        ...state,
        musicPosition: (state.musicPosition + 1) % state.musicList.length,
      };
    case DECREMENT_MUSIC_POSITION:
      return {
        ...state,
        musicPosition:
          (state.musicPosition - 1 + state.musicList.length) %
          state.musicList.length,
      };
    default:
      return state;
  }
}
