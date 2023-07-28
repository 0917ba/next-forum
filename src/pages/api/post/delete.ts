import { NextApiRequest, NextApiResponse } from 'next';
import deletePost from '@/lib/post/deletePost';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { id } = req.body;
    await deletePost(id);
    return res.status(200).json({ status: 'ok' });
  } else {
    return res.redirect(302, '/');
  }
}
