"use client";

import { ArrowBigDown, ArrowBigUp } from "lucide-react";

export default function PostVoteBtn() {
  return (
    <div className="mt-5 flex flex-col items-center gap-5">
      <button>
        <ArrowBigUp size={24} />
      </button>
      <span>100</span>
      <button>
        <ArrowBigDown size={24} />
      </button>
    </div>
  );
}
