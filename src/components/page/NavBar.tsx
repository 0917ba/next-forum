import Link from "next/link";
import { getServerSession } from "next-auth";
import UserLogoutBtn from "./UserLogoutBtn";
import CoolLink from "../ui/CoolLink";
import { authOptions } from "@/lib/auth";

export default async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 bg-zinc-100 py-2">
      <div className="flex h-full items-center justify-around gap-5 px-2 ">
        <div className="text-lg font-normal text-zinc-700">
          <Link href="/">익명게시판😀</Link>
        </div>
        <div className="flex h-8 max-w-md grow items-center justify-start rounded-md bg-white px-2 md:max-w-xl ">
          <div className=" font-light text-zinc-700">검색</div>
        </div>
        {session?.user ? (
          <UserLogoutBtn />
        ) : (
          <CoolLink href="signin">로그인</CoolLink>
        )}
      </div>
    </div>
  );
}
