/// <reference types="next" />
/// <reference types="next/types/global" />

import { IncomingMessage } from 'http';
import { Session } from 'next-iron-session';

declare module 'next' {
  export interface NextApiRequest extends IncomingMessage {
    session: Session;
  }
}
