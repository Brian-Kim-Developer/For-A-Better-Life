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

export interface fetchAllQoDAction {
  type: ActionType.FETCH_All_QOD;
  payload: Array<QoD>;
}

export interface setQoDAction {
  type: ActionType.SET_QOD;
  payload: QoD;
}

export type Action =
  | ToggleThemeAction
  | FetchQoDAction
  | fetchAllQoDAction
  | setQoDAction;