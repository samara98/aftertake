import { combineReducers } from 'redux';

import counterReducer from './counter-reducer';
import tickReducer from './tick-reducer';

const reducers = combineReducers({
  counter: counterReducer,
  tick: tickReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
