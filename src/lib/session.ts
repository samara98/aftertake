// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { Handler, Session, SessionOptions, withIronSession } from 'next-iron-session';
import { GetServerSidePropsContext as GetServerSidePropsContextRedux } from 'next-redux-wrapper';
import { Store } from 'redux';

import { wrapper } from '~/store/store';

const sessionOptions: SessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: '_SID_',
  cookieOptions: {
    // the next line allows to use the session in non-https environments like
    // Next.js dev mode (http://localhost:3000)
    secure: process.env.NODE_ENV === 'production',
  },
};

export function withSessionApi(handler: Handler) {
  return withIronSession(handler, sessionOptions);
}

export function withSessionSSR(
  handler: (
    ctx: GetServerSidePropsContext & { req: { session: Session } },
  ) => Promise<GetServerSidePropsResult<any>>,
) {
  return withIronSession(handler, sessionOptions);
}

export function withSessionReduxSSR(
  handler: (
    ctx: GetServerSidePropsContextRedux & { store: Store<any, any>; req: { session: Session } },
  ) => Promise<GetServerSidePropsResult<any>>,
) {
  return withIronSession(wrapper.getServerSideProps(handler), sessionOptions);
}
