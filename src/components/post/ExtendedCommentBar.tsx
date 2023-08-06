import CommentInput from "./CommentInput";
import Comments from "./Comments";

type Props = {
  postId: string;
};

export default function ExtendedCommentBar({ postId }: Props) {
  return (
    <div className="my-10 flex min-h-[300px] flex-col gap-7 px-9">
      <hr className="mb-5 h-px border-0 bg-slate-200" />
      <CommentInput postId={postId} />
      <div className="mt-4">
        <Comments postId={postId} />
      </div>
    </div>
  );
}
