import { Dispatch } from 'react';

import { CountAction, CountType } from '../types';

export const addCount = (number?: number) => (dispatch: Dispatch<CountAction>) => {
  return dispatch({ type: CountType.COUNT_ADD, payload: number });
};
