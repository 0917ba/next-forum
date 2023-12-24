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

  // console.log("voteType", voteType, "increment", increment);

  return new Response(JSON.stringify({ status: "ok" }));
}
