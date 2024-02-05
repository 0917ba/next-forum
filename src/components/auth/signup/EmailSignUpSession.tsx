"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export default function EmailSignUpSession() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onLogin = async () => {
    if (!email || !password || !username) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 비밀번호 형식이 아니면
    // 비밀번호 형식: 숫자 or 문자, 8자 이상
    const passwordPattern = /^[A-Za-z0-9]{8,}$/;
    if (!passwordPattern.test(password)) {
      alert("비밀번호는 숫자 또는 문자로 8자 이상이어야 합니다.");
      return;
    }

    // 이메일 형식이 아니면
    const pattern = /^[A-Za-z0-9_.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if (!pattern.test(email)) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }

    // 닉네임 형식이 아니면
    const usernamePattern = /^[가-힣a-zA-Z0-9]{2,10}$/;
    if (!usernamePattern.test(username)) {
      alert("닉네임은 한글, 영문, 숫자로 2자 이상 10자 이하여야 합니다.");
      return;
    }

    const formData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    };

    const res = await fetch(`/api/users`, formData).then((res) => res.json());
    if (res?.status !== "ok") {
      alert(res?.message);
      return;
    }

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
        className="h-8 w-52 rounded-sm bg-slate-200 text-sm px-1.5"
        placeholder="닉네임"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        className="h-8 w-52 rounded-sm bg-slate-200 text-sm px-1.5"
        placeholder="이메일"
      />
      <input
        name="password"
        type="password"
        onChange={onChange}
        value={password}
        className="h-8 w-52 rounded-sm bg-slate-200 text-sm px-1.5"
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
