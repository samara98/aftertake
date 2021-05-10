import { NextApiHandler } from 'next';
import { withSessionApi } from '~/lib/session';

const handler: NextApiHandler = async (req, res) => {
  // get user from database then:
  req.session.set('user', {
    id: 230,
    admin: true,
  });
  await req.session.save();
  res.json({ message: 'Logged in' });
};

export default withSessionApi(handler);
