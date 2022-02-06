import { ActionType } from '../action-types';
import { Action } from '../actions';

const qodCategoryReducer = ((state: Object = {}, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_QOD_CATEGORY:
      state = Object.assign({}, action.payload);

      return state;
    default:
      return state;
  }
});

export default qodCategoryReducer;
