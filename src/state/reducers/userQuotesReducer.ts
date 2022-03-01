import { ActionType } from '../action-types';
import { Action, Quote } from '../actions';

const userQuotesReducer = ((state: Array<Quote> = [], action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_USER_QUOTES:
      state = action.payload;

      return state;
    default:
      return state;
  }
});

export default userQuotesReducer;
