import Post from "@/components/Post";
import Link from "next/link";
import db from "@/lib/db";
import { collection, getDocs } from "firebase/firestore";

type post = {
  id: string;
  title: string;
  content: string;
  author: string;
};

export default async function Page() {
  const posts = await getDocs(collection(db, "posts"));
  const postsList: post[] = [];

  posts.forEach((post) => {
    const postData = post.data();
    postsList.push({
      id: post.id,
      title: postData.title,
      content: postData.content,
      author: postData.author,
    });
  });

  return (
    <div className="mx-16 h-max pt-4 md:mx-40">
      <h1 className="mb-6 text-3xl font-semibold text-zinc-800">글 목록</h1>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 min-h-[12rem]">
          <div className="flex flex-col gap-3">
            {postsList.map((post: any) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="col-span-1 h-48 rounded-md bg-white shadow">
          <Link
            href="/write"
            className=" flex h-8 w-16 items-center justify-center rounded-md bg-zinc-900"
          >
            <div className="text-sm font-light text-white">글쓰기</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
