import { getServerSession } from "next-auth";
import PostVoteBtn from "./PostVoteBtn";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/database";

type Props = {
  postId: string;
  initialVote: number;
};

type VoteType = -1 | 0 | 1;

export default async function PostVote({ postId, initialVote }: Props) {
  const db = (await connectDB).db("forum");
  const session = await getServerSession(authOptions);

  const userId = session?.user?._id;
  const isVoted = await db.collection("votes").findOne({ postId, userId });
  let initialType: VoteType = 0;
  if (isVoted) {
    initialType = isVoted.voteType;
  }

  return (
    <div className="sm:w-24 w-[72px] flex-none">
      <PostVoteBtn
        postId={postId}
        userId={userId}
        initialVote={initialVote}
        initialType={initialType}
      />
    </div>
  );
}
