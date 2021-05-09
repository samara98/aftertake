import { useDispatch } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

export const useActions = <A, C extends ActionCreatorsMapObject<A>>(actionCreators: C): C => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
