import connectDB from "@/lib/database";

interface Props {
  params: {
    postId: string;
  };
}
export async function GET(req: Request, { params }: Props) {
  const { postId } = params;
  const db = (await connectDB).db("forum");
  const post = await db.collection("posts").findOne({ _id: postId });

  return new Response(JSON.stringify(post));
}

export async function POST(req: Request, { params }: Props) {
  const { postId } = params;
  const db = (await connectDB).db("forum");
  const formData = await req.json();

  await db.collection("posts").insertOne({
    _id: postId,
    comment: 0,
    vote: 0,
    ...formData,
    createdAt: new Date().getTime(),
  });

  return new Response(JSON.stringify({ status: "ok" }));
}

export async function PATCH(req: Request, { params }: Props) {
  const { postId } = params;
  const db = (await connectDB).db("forum");
  const formData = await req.json();

  await db.collection("posts").updateOne(
    { _id: postId },
    {
      $set: {
        ...formData,
      },
    },
  );

  return new Response(JSON.stringify({ status: "ok" }));
}

export async function DELETE(req: Request, { params }: Props) {
  const { postId } = params;
  const db = (await connectDB).db("forum");

  await db.collection("posts").deleteOne({ _id: postId });

  return new Response(JSON.stringify({ status: "ok" }));
}
