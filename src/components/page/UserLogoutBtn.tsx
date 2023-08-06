"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserLogoutBtn() {
  const router = useRouter();

  const onClick = () => {
    signOut();
    router.push("/");
  };

  return (
    <button
      onClick={onClick}
      className="h-8 w-20 rounded-md bg-zinc-900 text-sm font-light text-white"
    >
      로그아웃
    </button>
  );
}
