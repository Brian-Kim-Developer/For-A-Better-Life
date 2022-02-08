import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import api from '../../apis';
import {
  Theme,
  ToggleThemeAction,
  Action,
  QoD,
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

export const fetchQoDList = () => {
  return async (dispatch: Dispatch<Action>) => {
    const categories = await api.get(
      '/qod/categories'
    ).then(categories => {
      return Object.keys(categories.data.contents.categories)
    });
    const qodQuotes = await Promise.all(
      categories.map(async category => await api.get('/qod', {params: {'category': category}}))
    ).then(qodQuote => {
      return qodQuote.map(qodQuote => qodQuote.data.contents.quotes[0]);
    });
    
    dispatch({
      type: ActionType.FETCH_QOD_LIST,
      payload: qodQuotes
    });
  };
}

export const setQoD = (qod: QoD) => {
  return {
    type: ActionType.SET_QOD,
    payload: qod
  }
}