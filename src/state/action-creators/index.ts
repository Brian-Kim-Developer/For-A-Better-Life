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

export const fetchAllQoD = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await api.get('/qod', {
      params: {
        'category': 'all'
      }
    });

    dispatch({
      type: ActionType.FETCH_All_QOD,
      payload: response.data.contents.quotes
    });
  };
}

export const setQoD = (qod: QoD) => {
  return {
    type: ActionType.SET_QOD,
    payload: qod
  }
}

export interface QuoteSearch {
  category: string,
  author: string,
  keyword: string
}

export const fetchUserQuotes = (formValues: QuoteSearch) => {
  return async (dispatch: Dispatch<Action>) => {
    console.log('formValues', formValues)
    const response = await api.get('/quote/search', {
      params: {
        'category': formValues.category,
        'author': formValues.author,
        'keyword': formValues.keyword
      }
    });

    dispatch({
      type: ActionType.FETCH_USER_QUOTES,
      payload: response.data.contents.quotes
    });
  };
}