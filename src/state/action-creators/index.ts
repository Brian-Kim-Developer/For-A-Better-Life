import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import api from '../../apis';
import {
  Theme,
  ToggleThemeAction,
  Action,
} from '../actions';

export const toggleTheme = (theme: Theme): ToggleThemeAction => {
  return {
    type: ActionType.TOGGLE_THEME,
    payload: theme
  };
};

export const fetchDOQ = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await api.get('/qod');

    dispatch({
      type: ActionType.FETCH_DOQ,
      payload: response.data.contents.quotes[0]
    });
  };
};