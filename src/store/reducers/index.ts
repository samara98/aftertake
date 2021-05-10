import { combineReducers } from 'redux';

import counterReducer from './counter-reducer';
import tickReducer from './tick-reducer';
import userReducer from './user-reducer';

const reducers = combineReducers({
  counter: counterReducer,
  tick: tickReducer,
  user: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
