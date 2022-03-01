import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import qodListReducer from './qodListReducer';
import qodReducer from './qodReducer';
import themeReducer from './themeReducer';
import userQuotesReducer from './userQuotesReducer';

const reducers = combineReducers({
  form: formReducer,
  theme: themeReducer,
  qod: qodReducer,
  qodList: qodListReducer,
  userQuotes: userQuotesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
