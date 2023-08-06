import connectDB from "@/lib/database";

export async function POST(req: Request) {
  const db = (await connectDB).db("forum");
  const formData = await req.json();

  if (!formData.userId)
    return new Response(
      JSON.stringify({ status: "error", message: "User id is required" }),
    );

  db.collection("posts").updateOne(
    { _id: formData.postId },
    {
      $inc: {
        vote: formData.increment,
      },
    },
  );
  // create new vote if not exist
  db.collection("votes").replaceOne(
    { postId: formData.postId, userId: formData.userId },
    {
      postId: formData.postId,
      userId: formData.userId,
      voteType: formData.voteType,
    },
    { upsert: true },
  );

  return new Response(JSON.stringify({ status: "ok" }));
}
