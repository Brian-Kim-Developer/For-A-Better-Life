import { ActionType } from '../action-types';
import { Action, Theme } from '../actions';

const initialState: Theme = 'light'

const themeReducer = ((state: Theme = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.TOGGLE_THEME:
      switch(action.payload) {
        case 'light':
          state = 'dark';
          break;
        case 'dark':
          state = 'light';
          break;
      }

      return state;
    default:
      return state;
  }
});

export default themeReducer;
