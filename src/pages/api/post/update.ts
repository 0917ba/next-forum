import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { id, title, author, data } = req.body;
    const db = (await connectDB).db("forum");
    console.log(id);
    await db.collection("posts").updateOne(
      { _id: id },
      {
        $set: {
          title,
          data,
          author,
        },
      },
    );
    return res.status(200).json({ status: "ok" });
  } else {
    return res.redirect(302, "/");
  }
}
