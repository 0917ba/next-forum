"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import EmailLoginSession from "../signin/EmailSignInSession";
import EmailSignUpSession from "./EmailSignUpSession";

export default function SignUpForm() {
  const [isEmailLogin, setIsEmailLogin] = useState(false);

  const onEmailLogin = () => {
    setIsEmailLogin(true);
  };
  const onGoogleLogin = async () => {
    await signIn("google");
  };

  return (
    <div className="w-full">
      {isEmailLogin ? (
        <EmailSignUpSession />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={onEmailLogin}
            className="h-8 w-72 rounded-md bg-zinc-900 text-sm font-light text-white"
          >
            이메일로 가입하기
          </button>
          <button
            onClick={onGoogleLogin}
            className="h-8 w-72 rounded-md bg-zinc-900 text-sm font-light text-white"
          >
            Sign Up with Google
          </button>
          <div className="mt-3 text-sm">
            또는{" "}
            <Link href="/signin">
              <span className="underline">로그인하기</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
