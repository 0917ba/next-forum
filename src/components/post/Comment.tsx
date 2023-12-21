import uid from "@/lib/uid";
import CommentDeleteBtn from "@/components/post/CommentDeleteBtn";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

type Comment = {
  authorId: string;
  postId: string;
  author: string;
  data: string;
  createdAt: number;
  _id: string;
};

export default async function Comment({ comment }: { comment: Comment }) {
  const { author, authorId, data, createdAt, _id } = comment;
  const session = await getServerSession(authOptions);
  const userId = session?.user?._id;

  return (
    <div className="flex w-full flex-col">
      <div className="mb-1 w-full flex justify-between relative">
          <div className={'text-sm flex gap-5'}>
              <span>작성자: <span className="underline">{author}</span></span>
              <span className={'text-sm text-zinc-400'}>{`${new Date(createdAt).toLocaleString()}`}</span>
          </div>
          {
              userId === authorId && <div className={'absolute top-0 right-0'}><CommentDeleteBtn id={_id} /></div>
          }
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
