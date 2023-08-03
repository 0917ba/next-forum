import { NextApiRequest, NextApiResponse } from "next";
import uid from "@/lib/uid";
import connectDB from "@/lib/database";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;
    const key = uid();
    const hash = await bcrypt.hash(password, 10);

    const db = (await connectDB).db("forum");
    await db.collection("users").insertOne({
      username,
      email,
      password: hash,
      _id: key,
      provider: "credentials",
    });
    return res.status(200).json({ status: "ok" });
  } else {
    return res.redirect(302, "/");
  }
}
