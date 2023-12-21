'use client'

import React from "react";
import {useRouter} from 'next-nprogress-bar';

export default function CoolLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: any;
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  }
  return (
      <button onClick={onClick} className={'flex h-8 w-fit items-center justify-center rounded-md bg-zinc-900 px-2.5'}>
        <div className="text-sm font-light text-white">{children}</div>
      </button>
  );
}
