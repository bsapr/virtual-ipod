import { INCREMENT_THEME_POSITION, DECREMENT_THEME_POSITION } from '../actions';

const initialThemeState = {
  themePosition: 1,
  themeList: ['Rose Gold', 'Space Gray', 'Gold', 'Light Purple', 'Black'],
};
export default function themes(state = initialThemeState, action) {
  switch (action.type) {
    case INCREMENT_THEME_POSITION:
      return {
        ...state,
        themePosition: (state.themePosition + 1) % state.themeList.length,
      };
    case DECREMENT_THEME_POSITION:
      return {
        ...state,
        themePosition:
          (state.themePosition - 1 + state.themeList.length) %
          state.themeList.length,
      };
    default:
      return state;
  }
}
