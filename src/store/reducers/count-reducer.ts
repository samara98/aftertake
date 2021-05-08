import { COUNT_ADD } from '../types/count-type';

const countInitialState = {
  count: 0,
};

const countReducer = (state = countInitialState, action) => {
  switch (action.type) {
    case COUNT_ADD:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default countReducer;
