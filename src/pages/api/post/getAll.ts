import { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";
import db from "@/lib/db";

type post = {
  id: string;
  title: string;
  content: string;
  author: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const posts = await getDocs(collection(db, "posts"));
    const postsList: post[] = [];

    posts.forEach((post) => {
      const postData = post.data();
      postsList.push({
        id: post.id,
        title: postData.title,
        content: postData.content,
        author: postData.author,
      });
    });

    return res.status(200).json({ postsList });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
