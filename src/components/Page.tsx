import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Link from 'next/link';

import Clock from './Clock';
import AddCount from './AddCount';
import { RootState } from '~/store/reducers';

const mapStateToProps = (state: RootState) => ({
  tick: state.tick,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface PageInterface {
  title: string;
  linkTo: string;
}

type Props = PropsFromRedux & PageInterface;

const Page: React.FC<Props> = ({ title, linkTo, tick }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
      <AddCount />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <br />
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
};

export default connector(Page);
