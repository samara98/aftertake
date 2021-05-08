import * as React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import Clock from './Clock';
import AddCount from './AddCount';

interface PageInterface {
  title: string;
  linkTo: string;
  tick?: any;
}

const Page: React.FC<PageInterface> = ({ title, linkTo, tick }) => (
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

export default connect((state) => state)(Page);
