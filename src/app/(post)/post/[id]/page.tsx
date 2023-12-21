import Post from "@/components/post/Post";
import connectDB from "@/lib/database";
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
  const db = (await connectDB).db("forum");
  const post: Post = await db.collection("posts").findOne({ _id: params.id });

  return (
    <div className="flex justify-center h-max m-auto w-full">
      <div className="md:mx-0 mx-8 w-full max-w-2xl flex-1 pt-8">
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
