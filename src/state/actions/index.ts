import { ActionType } from "../action-types";

export type Theme = 'light' | 'dark';
export interface ToggleThemeAction {
  type: ActionType.TOGGLE_THEME;
  payload: Theme;
}

export type Action =
  | ToggleThemeAction;