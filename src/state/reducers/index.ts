import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import qodListReducer from './qodListReducer';
import qodReducer from './qodReducer';
import themeReducer from './themeReducer';

const reducers = combineReducers({
  form: formReducer,
  theme: themeReducer,
  qod: qodReducer,
  qodList: qodListReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
