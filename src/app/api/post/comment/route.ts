import connectDB from "@/lib/database";
import uid from "@/lib/uid";

type FormData = {
  authorId: string;
  postId: string;
  author: string;
  data: string;
};

export async function POST(req: Request) {
  const db = (await connectDB).db("forum");
  const formData: FormData = await req.json();

  const { authorId, postId, author, data } = formData;

  if (!authorId)
    return new Response(
      JSON.stringify({ status: "error", message: "Author id is required" }),
    );
  // create new comment if not exist
  db.collection("comments").insertOne({
    postId,
    authorId,
    author,
    data,
    createdAt: new Date().getTime(),
    _id: uid(),
  });

  return new Response(JSON.stringify({ status: "ok" }));
}
