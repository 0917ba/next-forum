"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function EmailSignInSession() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onLogin = async () => {
    const result = await signIn("user-credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      alert("로그인에 실패했습니다.");
      setEmail("");
      setPassword("");
    } else {
      window.location.replace("/");
    }
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
  );
}
