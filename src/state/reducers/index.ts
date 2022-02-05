import { combineReducers } from 'redux';
import doqReducer from './doqReducer';
import themeReducer from './themeReducer';

const reducers = combineReducers({
  theme: themeReducer,
  doq: doqReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
