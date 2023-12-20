import connectDB from "@/lib/database";

export async function POST(req: Request) {
  const db = (await connectDB).db("forum");
  const formData = await req.json();
  await db.collection("posts").insertOne({
    ...formData,
    createdAt: new Date().getTime(),
  });

  return new Response(JSON.stringify({ status: "ok" }));
}
