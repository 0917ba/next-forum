import bcrypt from "bcrypt";
import connectDB from "@/lib/database";

export async function POST(req: Request) {
  const { username, email, password } = await req.json();
  const hash = await bcrypt.hash(password, 10);

  const db = (await connectDB).db("forum");

  // check if email exists
  const emailCheck = await db.collection("users").findOne({
    email,
  });
  if (emailCheck) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: "이미 존재하는 이메일입니다.",
      }),
    );
  }

  await db.collection("users").insertOne({
    username,
    email,
    password: hash,
    provider: "credentials",
  });
  return new Response(JSON.stringify({ status: "ok" }));
}
