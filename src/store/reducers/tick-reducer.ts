import { TICK_TICK } from '../types/tick-type';

const tickInitialState = {
  lastUpdate: 0,
  light: false,
};

export default function tickReducer(state = tickInitialState, action) {
  switch (action.type) {
    case TICK_TICK:
      return { ...state, lastUpdate: action.payload.ts, light: !!action.payload.light };
    default:
      return state;
  }
}
