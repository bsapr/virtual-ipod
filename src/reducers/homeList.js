import { INCREMENT_HOME_POSITION, DECREMENT_HOME_POSITION } from '../actions';

const initialScreenListState = {
  homePosition: 0,
};

export default function homeList(state = initialScreenListState, action) {
  console.log('In reducer ', action.type);
  switch (action.type) {
    case INCREMENT_HOME_POSITION:
      return {
        ...state,
        homePosition: (state.homePosition + 1) % 4,
      };
    case DECREMENT_HOME_POSITION:
      return {
        ...state,
        homePosition: (state.homePosition - 1 + 4) % 4,
      };
    default:
      return state;
  }
}
