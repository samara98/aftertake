import { NextApiHandler } from 'next';

import { withSessionApi } from '~/lib/session';

const handler: NextApiHandler = async (req, res) => {
  const user = req.session.get('user');
  res.json({ user });
};

export default withSessionApi(handler);
