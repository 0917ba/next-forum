"use client";

import { signOut } from "next-auth/react";

export default function UserLogoutBtn() {
  const onClick = () => {
    signOut();
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
