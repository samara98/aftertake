import { CountAction, CountType } from '../types';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: CountAction) => {
  switch (action.type) {
    case CountType.COUNT_ADD:
      return { ...state, count: state.count + (action.payload || 1) };
    default:
      return state;
  }
};

export default counterReducer;
