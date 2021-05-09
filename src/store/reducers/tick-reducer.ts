import { TickAction, TickType } from '../types';

const initialState = {
  lastUpdate: 0,
  light: false,
};

export default function tickReducer(state = initialState, action: TickAction) {
  switch (action.type) {
    case TickType.TICK_TICK:
      return { ...state, lastUpdate: action.payload.ts, light: !!action.payload.light };
    default:
      return state;
  }
}
