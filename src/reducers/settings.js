import {
  INCREMENT_SETTING_POSITION,
  DECREMENT_SETTING_POSITION,
} from '../actions';

const initialSettingState = {
  settingPosition: 0,
  settingList: ['Themes', 'Wheel Color', 'Wallpaper'],
};
export default function setting(state = initialSettingState, action) {
  switch (action.type) {
    case INCREMENT_SETTING_POSITION:
      return {
        ...state,
        settingPosition: (state.settingPosition + 1) % state.settingList.length,
      };
    case DECREMENT_SETTING_POSITION:
      return {
        ...state,
        settingPosition:
          (state.settingPosition - 1 + state.settingList.length) %
          state.settingList.length,
      };
    default:
      return state;
  }
}
