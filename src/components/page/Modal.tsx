"use client";

import useInitialPath from "@/hooks/useInitialPath";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const initialPath = useInitialPath();
  const router = useRouter();

  const onClick = () => {
    router.push(initialPath);
  };

  return (
    <div className="fixed inset-0 z-10 bg-zinc-900/20">
      <div className="mx-auto flex h-full max-w-lg items-center">
        <div className="relative h-fit w-full rounded-lg bg-white px-2 py-20">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClick}
              className="z-20 flex h-6 w-6 items-center justify-center rounded-md bg-gray-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
