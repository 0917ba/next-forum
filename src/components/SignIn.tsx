import { LogIn } from "lucide-react";
import UserAuthForm from "./UserAuthForm";

export default function SignIn() {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <LogIn />
      <h1 className="text-2xl font-semibold">로그인</h1>
      <p className="mb-3">먼저 로그인하세요!😊</p>
      <UserAuthForm />
    </div>
  );
}
