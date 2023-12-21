import CommentInput from "./CommentInput";
import Comments from "./Comments";
import {authOptions} from "@/lib/auth";
import {getServerSession} from "next-auth";

type Props = {
  postId: string;
};

export default async function ExtendedCommentBar({ postId }: Props) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?._id;

  return (
    <div className="my-10 flex min-h-[300px] flex-col px-9">
      <hr className="mb-10 h-px border-0 bg-slate-200" />
        {userId && <CommentInput postId={postId} />}
      <div className="mt-4 mb-7">
        <Comments postId={postId} />
      </div>
    </div>
  );
}
