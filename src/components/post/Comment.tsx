import uid from "@/lib/uid";

type Comment = {
  authorId: string;
  postId: string;
  author: string;
  data: string;
  _id: string;
};

export default async function Comment({ comment }: { comment: Comment }) {
  const { author, data } = comment;

  return (
    <div className="flex w-full flex-col">
      <div className="mb-1 w-full text-sm">
        작성자: <span className="underline">{author}</span>
      </div>
      <div className="text-sm font-normal">
        {data.split("\n").map((line) => (
          <span key={uid()}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </div>
  );
}
