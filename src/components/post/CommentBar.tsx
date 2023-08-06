import { MessageSquare } from "lucide-react";

type Props = {
  commentCount: number;
};

export default function CommentBar({ commentCount }: Props) {
  return (
    <div className="flex h-12 w-full items-center gap-2 bg-slate-50 px-6">
      <MessageSquare className="h-[14px] w-[14px]" />
      <div className="text-sm">{commentCount}개의 댓글</div>
    </div>
  );
}
