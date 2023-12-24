import connectDB from "@/lib/database";
import uid from "@/lib/uid";

interface Props {
  params: {
    postId: string;
  };
}
export async function POST(req: Request, { params }: Props) {
  const { postId } = params;
  const db = (await connectDB).db("forum");
  const formData = await req.json();

  await db.collection("comments").insertOne({
    _id: uid(),
    postId,
    ...formData,
    createdAt: new Date().getTime(),
  });

  return new Response(JSON.stringify({ status: "ok" }));
}

export async function GET(req: Request, { params }: Props) {
  // console.log(params);
  const { postId } = params;
  const db = (await connectDB).db("forum");
  const comments = await db.collection("comments").find({ postId }).toArray();

  return new Response(JSON.stringify(comments));
}
