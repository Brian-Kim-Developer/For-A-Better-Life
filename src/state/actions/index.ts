import { ActionType } from "../action-types";

export type Theme = 'light' | 'dark';
export interface ToggleThemeAction {
  type: ActionType.TOGGLE_THEME;
  payload: Theme;
}

export interface QoD {
  id: string;
  author: string;
  category: string;
  background: string;
  quote: string;
  title: string;
  tags: any;
}

export interface FetchQoDAction {
  type: ActionType.FETCH_QOD;
  payload: QoD;
}

export interface FetchAllQoDAction {
  type: ActionType.FETCH_All_QOD;
  payload: Array<QoD>;
}

export interface SetQoDAction {
  type: ActionType.SET_QOD;
  payload: QoD;
}

export interface Quote {
  id: string,
  quote: string,
  author: string
}
export interface FetchUserQuotes {
  type: ActionType.FETCH_USER_QUOTES;
  payload: Array<Quote>;
}

export type Action =
  | ToggleThemeAction
  | FetchQoDAction
  | FetchAllQoDAction
  | SetQoDAction
  | FetchUserQuotes;