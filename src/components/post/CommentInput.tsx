"use client";

import { ChangeEvent, useState } from "react";
import CoolButton from "../ui/CoolButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  postId: string;
};

export default function CommentInput({ postId }: Props) {
  const [value, setValue] = useState("");
  const [author, setAuthor] = useState("");

  const session = useSession();

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const onClick = async () => {
    const formData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorId: session?.data?.user._id,
        postId,
        author,
        data: value,
      }),
    };
    await fetch("/api/post/comment", formData);
    setValue("");
    setAuthor("");
    alert("등록되었습니다.");
    // router.refresh();
    location.reload();
  };

  return (
    <div className="min-h-[150px] w-full mb-8">
      <h1 className="mb-2.5 text-lg font-semibold">댓글</h1>
      <div className="flex flex-col gap-2">
        <input
          placeholder="작성자"
          className="font-md text-sm underline focus:outline-none"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <textarea
          className="w-full resize-none overflow-hidden rounded-sm border-[1px] p-2 text-sm focus:outline-none"
          placeholder="댓글을 입력하세요"
          rows={4}
          onChange={onChange}
          value={value}
        />
        <div className="flex justify-end">
          <CoolButton onClick={onClick}>등록</CoolButton>
        </div>
      </div>
    </div>
  );
}
