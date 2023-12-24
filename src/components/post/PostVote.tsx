import { getServerSession } from "next-auth";
import PostVoteBtn from "./PostVoteBtn";
import { authOptions } from "@/lib/auth";

type Props = {
  postId: string;
  initialVote: number;
};

type VoteType = -1 | 0 | 1;

export default async function PostVote({ postId, initialVote }: Props) {
  const session = await getServerSession(authOptions);
  const url = process.env.URL!;

  let initialType: VoteType = 0;

  const userId = session?.user?._id;
  if (userId) {
    const isVoted = await fetch(
      `${url}/api/posts/${postId}/votes/${userId}`,
    ).then((res) => res.json());

    if (isVoted) {
      initialType = isVoted.voteType;
    }
  }

  return (
    <div className="w-[72px] flex-none sm:w-24">
      <PostVoteBtn
        postId={postId}
        userId={userId}
        initialVote={initialVote}
        initialType={initialType}
      />
    </div>
  );
}
