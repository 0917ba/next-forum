import { NextApiRequest, NextApiResponse } from 'next';
import addPost from '@/lib/post/addPost';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { title, content, author } = req.body;
    await addPost(title, content, author);
    // return these values to the client.
    return res.status(200).json({ status: 'ok' });
  } else {
    return res.redirect(302, '/');
  }
}
