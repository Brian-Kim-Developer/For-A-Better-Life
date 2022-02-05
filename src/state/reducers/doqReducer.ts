import { ActionType } from '../action-types';
import { Action } from '../actions';

interface doqState {
  author: string,
  background: string,
  category: string,
  quote: string,
  tags: Array<string>,
  title: string
}

const initialState: doqState = {
  author: '',
  background: '',
  category: '',
  quote: '',
  tags: [],
  title: ''
}

const doqReducer = ((state: doqState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_DOQ:
    const { author, background, category, quote, tags, title } = action.payload;  
      state.author = author;
      state.background = background;
      state.category = category;
      state.quote = quote;
      state.tags = tags;
      state.title = title;

      return state;
    default:
      return state;
  }
});

export default doqReducer;
