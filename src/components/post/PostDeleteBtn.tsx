"use client";

import { useRouter } from "next/navigation";
import CoolButton from "../ui/CoolButton";

export default function PostDeleteBtn({ id }: { id: string }) {
  const router = useRouter();

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
  return <CoolButton onClick={onDelete}>삭제</CoolButton>;
}
