import connectDB from "@/lib/database";

interface Props {
  params: {
    commentId: string;
  };
}

export async function GET(req: Request, { params }: Props) {
  const { commentId } = params;
  const db = (await connectDB).db("forum");
  const comment = await db.collection("comments").findOne({ _id: commentId });

  return new Response(JSON.stringify(comment));
}

export async function DELETE(req: Request, { params }: Props) {
  const { commentId } = params;
  const db = (await connectDB).db("forum");

  await db.collection("comments").deleteOne({ _id: commentId });

  return new Response(JSON.stringify({ status: "ok" }));
}
