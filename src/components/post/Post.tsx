import { DocumentData } from "firebase/firestore";
import { getServerSession } from "next-auth";
import PostDeleteBtn from "./PostDeleteBtn";
import CommentBar from "./CommentBar";
import PostVote from "./PostVote";
import CoolLink from "../ui/CoolLink";
import { authOptions } from "@/lib/auth";

export default async function Post({ post }: { post: DocumentData }) {
  const session = await getServerSession(authOptions);
  const { _id, authorId, title, author, content } = post;

  return (
    <div className="flex flex-col flex-wrap content-between rounded-md bg-white shadow">
      <div className="flex grow">
        <PostVote />
        <div className="my-2 flex grow flex-col content-between">
          <div className="mb-1 w-full text-sm">
            작성자: <span className="underline">{author}</span>
          </div>
          <h1 className="mb-2.5 text-xl font-semibold">{title}</h1>
          <p className="mb-3 text-base">{content}</p>
        </div>
        {session?.user._id === authorId && (
          <div className="mr-2 mt-2 flex flex-none gap-1">
            <CoolLink href={`/edit/${_id}`}>수정</CoolLink>
            <PostDeleteBtn id={_id} />
          </div>
        )}
      </div>
      <CommentBar />
    </div>
  );
}
