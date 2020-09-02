import {
  INCREMENT_SONG_POSITION,
  DECREMENT_SONG_POSITION,
  UPDTE_PLAYING_SONG_INDEX,
} from '../actions';

const initialSongListState = {
  songPosition: 0,
  currentPlayingSongIndex: 0,
  songList: ['Shape of You', 'Despacito', 'Laung Gawacha'],
  imgList: ['Shape of You', 'Despacito', 'Laung Gawacha'],
};

export default function song(state = initialSongListState, action) {
  switch (action.type) {
    case INCREMENT_SONG_POSITION:
      return {
        ...state,
        songPosition: (state.songPosition + 1) % state.songList.length,
      };
    case DECREMENT_SONG_POSITION:
      return {
        ...state,
        songPosition:
          (state.songPosition - 1 + state.songList.length) %
          state.songList.length,
      };
    case UPDTE_PLAYING_SONG_INDEX:
      return {
        ...state,
        currentPlayingSongIndex: action.currentPlayingSongIndex,
      };
    default:
      return state;
  }
}
