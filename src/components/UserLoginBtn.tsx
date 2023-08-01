"use client";

import { signIn } from "next-auth/react";

export default function UserLoginBtn() {
  const onClick = () => {
    signIn();
  };
  return (
    <button
      onClick={onClick}
      className="h-8 w-16 rounded-md bg-zinc-900 text-sm font-light text-white"
    >
      로그인
    </button>
  );
}
