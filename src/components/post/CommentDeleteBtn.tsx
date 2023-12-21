"use client";

import { useRouter } from "next/navigation";
import CoolButton from "../ui/CoolButton";

export default function CommentDeleteBtn({ id }: { id: string }) {
    const router = useRouter();

    const onDelete = async () => {
        const data = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        };
        await fetch("/api/post/comment", data);
        alert("삭제되었습니다.")
        router.refresh();
        // refresh
        // location.reload();
    };
    return <CoolButton onClick={onDelete}>삭제</CoolButton>;
}
