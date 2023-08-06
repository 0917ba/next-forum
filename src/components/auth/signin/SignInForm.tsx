"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EmailSignInSession from "./EmailSignInSession";

export default function SignInForm() {
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [prev, setPrev] = useState<string | null>(null);

  const searchParams = useSearchParams();

  const onEmailLogin = () => {
    setIsEmailLogin(true);
  };
  const onGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  useEffect(() => {
    const _prev = searchParams?.get("prev");
    if (_prev) setPrev(_prev);
  }, []);

  return (
    <div className="w-full">
      {isEmailLogin ? (
        <EmailSignInSession />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={onEmailLogin}
            className="h-8 w-72 rounded-md bg-zinc-900 text-sm font-light text-white"
          >
            이메일로 로그인하기
          </button>
          <button
            onClick={onGoogleLogin}
            className="h-8 w-72 rounded-md bg-zinc-900 text-sm font-light text-white"
          >
            Sign In with Google
          </button>
          <div className="mt-3 text-sm">
            또는{" "}
            <Link
              href={{
                pathname: "/signup",
                query: { prev },
              }}
            >
              <span className="underline">가입하기</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
