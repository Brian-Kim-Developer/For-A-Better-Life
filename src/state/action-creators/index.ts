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

export const fetchQoD = (category?: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await api.get('/qod', {
      params: {
        'category': category || ''
      }
    });

    dispatch({
      type: ActionType.FETCH_QOD,
      payload: response.data.contents.quotes[0]
    });
  };
};

export const fetchQoDCategory = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await api.get('/qod/categories');

    dispatch({
      type: ActionType.FETCH_QOD_CATEGORY,
      payload: response.data.contents.categories
    });
  };
}