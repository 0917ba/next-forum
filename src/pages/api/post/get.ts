import { NextApiRequest, NextApiResponse } from 'next';
import getPost from '@/lib/post/getPost';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const post = await getPost(req.body.id);
    return res.status(200).json(post);
  } else {
    return res.redirect(302, '/');
  }
}
