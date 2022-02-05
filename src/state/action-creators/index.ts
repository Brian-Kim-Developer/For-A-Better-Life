import { ActionType } from '../action-types';
import {
  Theme,
  ToggleThemeAction,
} from '../actions';

export const toggleTheme = (theme: Theme): ToggleThemeAction => {
  return {
    type: ActionType.TOGGLE_THEME,
    payload: theme
  };
};

