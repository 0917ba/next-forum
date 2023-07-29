import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 bg-zinc-100 py-2">
      <div className="flex h-full items-center justify-around gap-5 px-2 ">
        <div className="text-lg font-normal text-zinc-700">익명게시판😀</div>
        <div className="flex h-8 max-w-xl grow items-center justify-start rounded-md bg-white px-2 ">
          <div className=" font-light text-zinc-700">검색</div>
        </div>
        <Link
          href="/write"
          className=" flex h-8 w-16 items-center justify-center rounded-md bg-zinc-900"
        >
          <div className="text-sm font-light text-white">글쓰기</div>
        </Link>
      </div>
    </div>
  );
}
