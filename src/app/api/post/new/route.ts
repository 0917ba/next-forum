import connectDB from "@/lib/database";

export async function POST(req: Request) {
  const db = (await connectDB).db("forum");
  const formData = await req.json();
  await db.collection("posts").insertOne(formData);

  return new Response(JSON.stringify({ status: "ok" }));
}
