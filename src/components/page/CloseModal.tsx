"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CloseModal() {
  const router = useRouter();

  const onClick = () => router.back();

  return (
    <button
      onClick={onClick}
      className="z-20 flex h-6 w-6 items-center justify-center rounded-md bg-gray-200"
    >
      <X className="h-4 w-4" />
    </button>
  );
}
