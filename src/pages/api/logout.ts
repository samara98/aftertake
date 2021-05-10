import { NextApiHandler } from 'next';
import { withSessionApi } from '~/lib/session';

const handler: NextApiHandler = async (req, res) => {
  req.session.destroy();
  res.json({ isLoggedIn: false });
};

export default withSessionApi(handler);
