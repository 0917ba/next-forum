"use client";

import useInitialPath from "@/hooks/useInitialPath";
import CoolLink from "../ui/CoolLink";

export default function UserLoginBtn() {
  const initialPath = useInitialPath();
  return (
    <CoolLink
      href={{
        pathname: "/signin",
        query: { prev: initialPath },
      }}
    >
      로그인
    </CoolLink>
  );
}
