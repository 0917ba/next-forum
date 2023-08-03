import { getServerSession } from "next-auth";
import PostDeleteBtn from "./PostDeleteBtn";
import CommentBar from "./CommentBar";
import PostVote from "./PostVote";
import CoolLink from "../ui/CoolLink";
import { authOptions } from "@/lib/auth";
import EditorJsRenderer from "./EditorJsRenderer";

export default async function Post({ post }: { post: any }) {
  const session = await getServerSession(authOptions);
  const { _id, authorId, title, author, data } = post;

  return (
    <div className="flex flex-col flex-wrap content-between rounded-md bg-white shadow">
      <div className="flex grow pr-2">
        <PostVote />
        <div className="relative flex-1">
          <div className="my-5 flex flex-col content-between">
            <div className="mb-1 w-full text-sm">
              작성자: <span className="underline">{author}</span>
            </div>
            <EditorJsRenderer data={data} title={title} />
          </div>
          {session?.user._id === authorId && (
            <div className="absolute right-0 top-5 flex flex-none gap-1">
              <CoolLink href={`/edit/${_id}`}>수정</CoolLink>
              <PostDeleteBtn id={_id} />
            </div>
          )}
        </div>
      </div>
      <CommentBar />
    </div>
  );
}
