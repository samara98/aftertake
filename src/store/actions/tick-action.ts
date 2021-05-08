import { TICK_TICK } from '../types/tick-type';

export const serverRenderClock = (isServer) => (dispatch) => {
  return dispatch({
    type: TICK_TICK,
    payload: {
      light: !isServer,
      ts: Date.now(),
    },
  });
};

export const startClock = () => (dispatch) => {
  return setInterval(
    () =>
      dispatch({
        type: TICK_TICK,
        payload: { light: true, ts: Date.now() },
      }),
    1000,
  );
};
