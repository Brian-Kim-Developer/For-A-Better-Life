import { ActionType } from '../action-types';
import { Action, Quote } from '../actions';

interface userQuotesState {
  loading: boolean;
  data: Array<Quote>;
}

const initialState: userQuotesState = {
  loading: false,
  data: []
}

const userQuotesReducer = ((state: userQuotesState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_USER_QUOTES:
      state = {
        ...state,
        data: action.payload,
        loading: false
      }
      return state;
    case ActionType.USER_QUOTES_LOADING_TOGGLE:
      console.log('test')
      state = {
        ...state,
        loading: action.payload
      }
      return state;
    default:
      return state;
  }
});

export default userQuotesReducer;
