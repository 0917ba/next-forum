import bcrypt from "bcrypt";
import connectDB from "@/lib/database";

export default async function POST(req: Request) {
  const { username, email, password } = await req.json();
  const hash = await bcrypt.hash(password, 10);

  const db = (await connectDB).db("forum");
  await db.collection("users").insertOne({
    username,
    email,
    password: hash,
    provider: "credentials",
  });
  return new Response(JSON.stringify({ status: "ok" }));
}
