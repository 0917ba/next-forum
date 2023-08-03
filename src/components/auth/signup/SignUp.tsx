import { LogIn } from "lucide-react";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <LogIn />
      <h1 className="text-2xl font-semibold">회원가입</h1>
      <p className="mb-3">처음 오셨군요!😆</p>
      <SignUpForm />
    </div>
  );
}
