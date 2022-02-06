import { ActionType } from '../action-types';
import { Action } from '../actions';

const qodCategoryReducer = ((state: Array<string> = [], action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_QOD_CATEGORY:
      state = Object.keys(action.payload);

      return state;
    default:
      return state;
  }
});

export default qodCategoryReducer;
