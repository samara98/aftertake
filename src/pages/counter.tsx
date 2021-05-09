import { FC, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Page from '~/components/Page';
import { useActions } from '~/hooks/useActions';
import { countAction, tickAction } from '~/store/actions';
import { wrapper } from '~/store/store';

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickAction.serverRenderClock(true));
  store.dispatch(countAction.addCount());
});

const Index: FC = () => {
  const { startClock } = useActions(tickAction);
  useEffect(() => {
    const timer = startClock();

    return () => {
      clearInterval(timer as any);
    };
  }, []);

  return <Page title="Counter Page" linkTo="/other" />;
};

export default Index;
