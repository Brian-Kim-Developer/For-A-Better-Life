import { ActionType } from "../action-types";

export type Theme = 'light' | 'dark';
export interface ToggleThemeAction {
  type: ActionType.TOGGLE_THEME;
  payload: Theme;
}


export interface FetchDOQAction {
  type: ActionType.FETCH_DOQ;
  payload: any;
}

export type Action =
  | ToggleThemeAction
  | FetchDOQAction;