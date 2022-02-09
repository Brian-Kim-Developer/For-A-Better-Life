import { ActionType } from '../action-types';
import { Action, QoD } from '../actions';

const qodListReducer = ((state: Array<QoD> = [], action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_All_QOD:
      state = action.payload;

      return state;
    default:
      return state;
  }
});

export default qodListReducer;
