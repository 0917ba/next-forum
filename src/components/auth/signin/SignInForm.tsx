"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import EmailSignInSession from "./EmailSignInSession";

export default function SignInForm() {
  const [isEmailLogin, setIsEmailLogin] = useState(false);

  const onEmailLogin = () => {
    setIsEmailLogin(true);
  };
  const onGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

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
            <Link href="/signup">
              <span className="underline">가입하기</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
