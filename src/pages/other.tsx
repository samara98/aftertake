import { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Page from '~/components/Page';
import { countAction, tickAction } from '~/store/actions';
import { wrapper } from '~/store/store';

const mapDispatchToProps = {
  addCount: countAction.addCount,
  startClock: tickAction.startClock,
  serverRenderClock: tickAction.serverRenderClock,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(tickAction.serverRenderClock(true));
  store.dispatch(countAction.addCount());
});

const Other: FC<Props> = ({ startClock }) => {
  useEffect(() => {
    const timer = startClock();

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Page title="Other Page" linkTo="/counter" />;
};

export default connector(Other);
