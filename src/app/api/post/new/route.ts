import connectDB from "@/lib/database";

export async function POST(req: Request) {
  const db = (await connectDB).db("forum");
  const { title, content, author, authorId, _id } = await req.json();
  await db.collection("posts").insertOne({
    title,
    content,
    author,
    authorId,
    _id,
  });

  return new Response(JSON.stringify({ status: "ok" }));
}
