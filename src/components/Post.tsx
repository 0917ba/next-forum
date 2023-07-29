"use client";

import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Post({ post }: { post: DocumentData }) {
  const router = useRouter();

  const { id, title, author, content } = post;
  const onEdit = () => {
    router.push(`/edit/${id}`);
  };

  const onDelete = async () => {
    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    };
    await fetch("/api/post/delete", data);
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex flex-wrap rounded-md bg-white shadow">
      <div className="w-full">작성자: {author}</div>
      <h1 className="w-full">{title}</h1>
      <p className="w-full">{content}</p>
      <button onClick={onEdit}>수정</button>&nbsp;
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}
