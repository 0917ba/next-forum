"use client";

import CoolButton from "../ui/CoolButton";

export default function CommentDeleteBtn({ id }: { id: string }) {
  const onDelete = async () => {
    await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    alert("삭제되었습니다.");
    // router.refresh();
    // refresh
    location.reload();
  };
  return <CoolButton onClick={onDelete}>삭제</CoolButton>;
}
