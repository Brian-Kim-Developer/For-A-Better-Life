import { combineReducers } from 'redux';
import qodListReducer from './qodListReducer';
import qodReducer from './qodReducer';
import themeReducer from './themeReducer';

const reducers = combineReducers({
  theme: themeReducer,
  qod: qodReducer,
  qodList: qodListReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
