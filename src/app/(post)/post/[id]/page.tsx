import Post from "@/components/post/Post";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type Post = {
  _id: any;
  title: string;
  data: any;
  author: string;
  authorId: string;
  vote: number;
  comment: number;
  createdAt: number;
};

export default async function Page({ params }: { params: { id: string } }) {
  const postId = params.id;
  const url = process.env.URL!;
  // const post: Post = await db.collection("posts").findOne({ _id: params.id });
  const post: Post = await fetch(`${url}/api/posts/${postId}`).then((res) =>
    res.json(),
  );

  return (
    <div className="m-auto flex h-max w-full justify-center">
      <div className="mx-8 w-full max-w-2xl flex-1 pt-8 md:mx-0">
        <Link className="mb-5 flex items-center" href="/">
          <ChevronLeft className="h-5 w-5" />
          <div className="text-sm font-semibold text-zinc-800">뒤로가기</div>
        </Link>
        <div className="min-h-[12rem]">
          <Post key={post._id} post={post} extended={true} />
        </div>
      </div>
    </div>
  );
}
