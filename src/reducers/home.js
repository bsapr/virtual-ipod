import { INCREMENT_HOME_POSITION, DECREMENT_HOME_POSITION } from '../actions';

const initialScreenListState = {
  homePosition: 0,
  homeList: ['Now Playing', 'Music', 'Games', 'Settings'],
};

export default function home(state = initialScreenListState, action) {
  switch (action.type) {
    case INCREMENT_HOME_POSITION:
      return {
        ...state,
        homePosition: (state.homePosition + 1) % state.homeList.length,
      };
    case DECREMENT_HOME_POSITION:
      return {
        ...state,
        homePosition: (state.homePosition - 1 + 4) % state.homeList.length,
      };
    default:
      return state;
  }
}
