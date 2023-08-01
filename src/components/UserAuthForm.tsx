"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export default function UserAuthForm() {
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailLogin = () => {
    setIsEmailLogin(true);
  };
  const onGoogleLogin = async () => {
    await signIn("google");
  };
  const onLogin = async () => {
    await signIn("user-credentials", {
      email,
      password,
    });
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
    }
  };

  return (
    <div className="w-full">
      {isEmailLogin ? (
        <div className="flex flex-col items-center gap-1">
          <input
            name="email"
            onChange={onChange}
            value={email}
            className="h-8 w-52 rounded-sm bg-slate-200 text-sm"
            placeholder="이메일"
          />
          <input
            name="password"
            type="password"
            onChange={onChange}
            value={password}
            className="h-8 w-52 rounded-sm bg-slate-200 text-sm"
            placeholder="비밀번호"
          />
          <button
            onClick={onLogin}
            className="mt-4 h-8 w-16 rounded-md bg-zinc-900 text-sm font-light text-white"
          >
            로그인
          </button>
        </div>
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
