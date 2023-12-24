"use client";

import { useRouter } from "next/navigation";
import CoolButton from "../ui/CoolButton";

export default function PostDeleteBtn({ id }: { id: string }) {
  const router = useRouter();

  const onDelete = async () => {
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    alert("삭제되었습니다.");
    router.refresh();
    router.push("/");
    // refresh
    location.reload();
  };
  return <CoolButton onClick={onDelete}>삭제</CoolButton>;
}
