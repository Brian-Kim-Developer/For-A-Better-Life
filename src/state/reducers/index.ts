import { combineReducers } from 'redux';
import qodReducer from './qodReducer';
import themeReducer from './themeReducer';

const reducers = combineReducers({
  theme: themeReducer,
  qod: qodReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
