import { Dispatch } from 'react';

import { TickAction, TickType } from '../types';

export const serverRenderClock = (isServer: boolean) => {
  return {
    type: TickType.TICK_TICK,
    payload: {
      light: !isServer,
      ts: Date.now(),
    },
  };
};

export const startClock = () => (dispatch: Dispatch<TickAction>) => {
  return setInterval(
    () =>
      dispatch({
        type: TickType.TICK_TICK,
        payload: { light: true, ts: Date.now() },
      }),
    1000,
  );
};
