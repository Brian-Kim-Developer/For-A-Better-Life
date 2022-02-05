import { ActionType } from '../action-types';
import { Action } from '../actions';

interface qodState {
  author: string,
  background: string,
  category: string,
  quote: string,
  tags: Array<string>,
  title: string
}

const initialState: qodState = {
  author: '',
  background: '',
  category: '',
  quote: '',
  tags: [],
  title: ''
}

const qodReducer = ((state: qodState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_QOD:
    const { author, background, category, quote, tags, title } = action.payload;  
      state = {
        ...state,
        author,
        background,
        category,
        quote,
        tags,
        title
      }
      return state;
    default:
      return state;
  }
});

export default qodReducer;
