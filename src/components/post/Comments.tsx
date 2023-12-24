import Comment from "@/components/post/Comment";

type Comment = {
  authorId: string;
  postId: string;
  author: string;
  data: string;
  createdAt: number;
  _id: string;
};

export default async function Comments({ postId }: { postId: string }) {
  // console.log("postId", postId);
  const url = process.env.URL!;
  const comments: Comment[] = await fetch(
    `${url}/api/posts/${postId}/comments`,
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-7">
      {comments.map((comment: Comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
