import connectDB from "@/lib/database";

interface Props {
  params: {
    postId: string;
    userId: string;
  };
}

export async function GET(req: Request, { params }: Props) {
  const db = (await connectDB).db("forum");
  const { postId, userId } = params;

  const vote = await db.collection("votes").findOne({ postId, userId });

  return new Response(JSON.stringify(vote));
}

export async function PUT(req: Request, { params }: Props) {
  const db = (await connectDB).db("forum");
  const { postId, userId } = params;

  const formData = await req.json();
  const { voteType, increment } = formData;

  if (!formData.userId)
    return new Response(
      JSON.stringify({ status: "error", message: "User id is required" }),
    );

  db.collection("posts").updateOne(
    { _id: postId },
    {
      $inc: {
        vote: increment,
      },
    },
  );
  // create new vote if not exist
  db.collection("votes").replaceOne(
    { postId, userId },
    {
      postId,
      userId,
      voteType,
    },
    { upsert: true },
  );

  return new Response(JSON.stringify({ status: "ok" }));
}
