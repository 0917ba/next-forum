import connectDB from "@/lib/database";
import Comment from "@/components/post/Comment";

type Comment = {
  authorId: string;
  postId: string;
  author: string;
  data: string;
  createdAt: number;
  _id: string;
};

export const dynamic = "force-dynamic";

export default async function Comments({ postId }: { postId: string }) {
  const db = (await connectDB).db("forum");
  const comments: Comment[] = await db
    .collection("comments")
    .find({ postId })
    .toArray();

  return (
    <div className="flex flex-col gap-7">
      {comments.map((comment: Comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
