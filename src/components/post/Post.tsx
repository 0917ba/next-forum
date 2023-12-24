import { getServerSession } from "next-auth";
import PostDeleteBtn from "./PostDeleteBtn";
import CommentBar from "./CommentBar";
import PostVote from "./PostVote";
import CoolLink from "../ui/CoolLink";
import { authOptions } from "@/lib/auth";
import EditorJsRenderer from "./EditorJsRenderer";
import ExtendedCommentBar from "./ExtendedCommentBar";
import connectDB from "@/lib/database";

type Post = {
  _id: any;
  title: string;
  data: any;
  author: string;
  authorId: string;
  vote: number;
  comment: number;
  createdAt: number;
};

export default async function Post({
  post,
  extended = false,
}: {
  post: Post;
  extended?: boolean;
}) {
  const session = await getServerSession(authOptions);

  const { _id, authorId, title, author, data, createdAt, vote, comment } = post;

  // init vote count
  const db = (await connectDB).db("forum");
  async function initVoteCount() {
    const votes = await db
      .collection("votes")
      .find({ postId: post._id })
      .toArray();

    let voteCount = 0;
    votes.forEach((_vote: any) => {
      voteCount += _vote.voteType;
    });

    await db.collection("posts").updateOne(
      { _id },
      {
        $set: {
          vote: voteCount,
        },
      },
    );
  }

  // init comment count
  async function initCommentCount() {
    const comments = await db
      .collection("comments")
      .find({ postId: post._id })
      .toArray();

    let commentCount = 0;
    comments.forEach((_comment: any) => {
      commentCount += 1;
    });

    await db.collection("posts").updateOne(
      { _id },
      {
        $set: {
          comment: comments.length,
        },
      },
    );
  }

  initCommentCount();
  initVoteCount();

  return (
    <div className="flex flex-col content-between rounded-md bg-white shadow">
      <div className="flex grow pr-4">
        <PostVote postId={_id} initialVote={vote} />
        <div className="relative flex-1">
          <div className="my-5 mb-0.5 flex flex-col content-between">
            <div className="flex content-start gap-5">
              <div className="mb-5 text-sm sm:mb-2">
                작성자: <span className="underline">{author}</span>
              </div>
              <div className="mb-0.5 hidden text-sm text-zinc-400 sm:block">
                <span>{`${new Date(createdAt).toLocaleString()}`}</span>
              </div>
            </div>

            <EditorJsRenderer data={data} title={title} id={_id} />
          </div>
          {session?.user._id === authorId && (
            <div className="absolute right-0 top-5 flex flex-none gap-1">
              <CoolLink href={`/edit/${_id}`}>수정</CoolLink>
              <PostDeleteBtn id={_id} />
            </div>
          )}
        </div>
      </div>
      {extended ? (
        <ExtendedCommentBar postId={_id} />
      ) : (
        <CommentBar commentCount={comment} />
      )}
    </div>
  );
}
