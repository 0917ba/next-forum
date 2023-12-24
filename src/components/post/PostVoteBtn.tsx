"use client";

import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type VoteType = -1 | 0 | 1;

type Props = {
  postId: string;
  userId: string | undefined;
  initialVote: number;
  initialType: VoteType;
};

export default function PostVoteBtn(props: Props) {
  const { postId, userId, initialVote, initialType } = props;

  const [currentVote, setCurrentVote] = useState(initialVote);
  const [currentType, setCurrentType] = useState<VoteType>(initialType);

  const router = useRouter();
  const session = useSession();

  const updateVote = async (voteType: VoteType) => {
    let increment = 0;
    // for fast updating of current type: fetch
    let _currentType = voteType;

    if (voteType === currentType) {
      increment = -voteType;
      setCurrentType(0);
      _currentType = 0;
    } else {
      increment = voteType - currentType;
      setCurrentType(voteType);
    }
    setCurrentVote((prev) => prev + increment);

    const formData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        voteType: _currentType,
        increment,
      }),
    };
    await fetch(`/api/posts/${postId}/votes/${userId}`, formData);
  };

  const onVoteUp = async () => {
    if (!session?.data?.user) router.push("/signin");
    else await updateVote(1);
  };
  const onVoteDown = async () => {
    if (!session?.data?.user) router.push("/signin");
    else await updateVote(-1);
  };

  return (
    <div className="mt-5 flex flex-col items-center gap-5">
      <button onClick={onVoteUp}>
        {currentType === 1 ? (
          <ArrowBigUp size={24} color="#1da1f2" />
        ) : (
          <ArrowBigUp size={24} />
        )}
      </button>
      <span>{currentVote}</span>
      <button onClick={onVoteDown}>
        {currentType === -1 ? (
          <ArrowBigDown size={24} color="#ff0000" />
        ) : (
          <ArrowBigDown size={24} />
        )}
      </button>
    </div>
  );
}
