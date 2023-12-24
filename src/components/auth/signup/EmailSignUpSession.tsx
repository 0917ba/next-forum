"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export default function EmailSignUpSession() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onLogin = async () => {
    const formData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    };

    await fetch(`/api/users`, formData);

    await signIn("user-credentials", {
      email,
      password,
    });
    window.location.replace("/");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "username":
        setUsername(event.target.value);
        break;
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <input
        name="username"
        onChange={onChange}
        value={username}
        className="h-8 w-52 rounded-sm bg-slate-200 text-sm"
        placeholder="닉네임"
      />
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
        className="mt-4 h-8 w-20 rounded-md bg-zinc-900 text-sm font-light text-white"
      >
        가입하기
      </button>
    </div>
  );
}
