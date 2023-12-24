import connectDB from "@/lib/database";

export async function GET() {
  const db = (await connectDB).db("forum");
  const posts = await db.collection("posts").find().toArray();

  return new Response(JSON.stringify(posts));
}
