import Link from "next/link";
import React from "react";

export default function CoolLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex h-8 w-fit items-center justify-center rounded-md bg-zinc-900 px-2.5"
    >
      <div className="text-sm font-light text-white">{children}</div>
    </Link>
  );
}
