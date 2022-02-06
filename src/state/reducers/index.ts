import { combineReducers } from 'redux';
import qodCategoryReducer from './qodCategoryReducer';
import qodReducer from './qodReducer';
import themeReducer from './themeReducer';

const reducers = combineReducers({
  theme: themeReducer,
  qod: qodReducer,
  qodCategory: qodCategoryReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
