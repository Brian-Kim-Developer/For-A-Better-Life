import { ActionType } from "../action-types";

export type Theme = 'light' | 'dark';
export interface ToggleThemeAction {
  type: ActionType.TOGGLE_THEME;
  payload: Theme;
}


export interface FetchQoDAction {
  type: ActionType.FETCH_QOD;
  payload: any;
}

export interface FetchQoDCategoryAction {
  type: ActionType.FETCH_QOD_CATEGORY;
  payload: any;
}

export type Action =
  | ToggleThemeAction
  | FetchQoDAction
  | FetchQoDCategoryAction;