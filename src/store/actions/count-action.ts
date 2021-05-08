import { COUNT_ADD } from '../types/count-type';

export const addCount = () => (dispatch) => {
  return dispatch({ type: COUNT_ADD });
};
