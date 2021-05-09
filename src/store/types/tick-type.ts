export enum TickType {
  TICK_TICK = 'TICK_TICK',
}

interface TickTick {
  type: TickType.TICK_TICK;
  payload: {
    light: boolean;
    ts: number;
  };
}

export type TickAction = TickTick;
