import { NextApiRequest, NextApiResponse } from 'next';
import updatePost from '@/lib/post/updatePost';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { id, title, author, content } = req.body;
    await updatePost(id, title, content, author);
    return res.status(200).json({ status: 'ok' });
  } else {
    return res.redirect(302, '/');
  }
}
