import {
  INCREMENT_WHEELCOLOR_POSITION,
  DECREMENT_WHEELCOLOR_POSITION,
} from '../actions';

const initialWheelColorState = {
  wheelColorPosition: 0,
  wheelColorList: ['Black', 'White', 'Brown', 'Blue'],
};
export default function wheelColor(state = initialWheelColorState, action) {
  switch (action.type) {
    case INCREMENT_WHEELCOLOR_POSITION:
      return {
        ...state,
        wheelColorPosition:
          (state.wheelColorPosition + 1) % state.wheelColorList.length,
      };
    case DECREMENT_WHEELCOLOR_POSITION:
      return {
        ...state,
        wheelColorPosition:
          (state.wheelColorPosition - 1 + state.wheelColorList.length) %
          state.wheelColorList.length,
      };
    default:
      return state;
  }
}
