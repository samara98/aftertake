import { applyMiddleware, createStore } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

import reducers, { RootState } from './reducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state: RootState, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.counter.count) nextState.counter.count = state.counter.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const store = () => {
  return createStore(reducer, bindMiddleware([thunk]));
};

export const wrapper = createWrapper(store);
