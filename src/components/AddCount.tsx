import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addCount } from '~/store/actions/counter-action';
import { RootState } from '~/store/reducers';

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  addCount: addCount,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const AddCount: FC<Props> = ({ count, addCount }) => {
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        AddCount: <span>{count}</span>
      </h1>
      <button onClick={() => addCount(2)}>Add To Count</button>
    </div>
  );
};

export default connector(AddCount);
