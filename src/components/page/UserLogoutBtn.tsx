"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function UserLogoutBtn() {
  const onClick = () => {
    signOut();
  };
  const { data } = useSession();
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <button
      onClick={onClick}
      className="h-8 w-20 rounded-md bg-zinc-900 text-sm font-light text-white"
    >
      로그아웃
    </button>
  );
}
