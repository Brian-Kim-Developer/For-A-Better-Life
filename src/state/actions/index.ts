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
  tags: Array<string>;
}

export interface FetchQoDAction {
  type: ActionType.FETCH_QOD;
  payload: QoD;
}

export interface FetchQoDListAction {
  type: ActionType.FETCH_QOD_LIST;
  payload: Array<QoD>;
}

export type Action =
  | ToggleThemeAction
  | FetchQoDAction
  | FetchQoDListAction;