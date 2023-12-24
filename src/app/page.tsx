import Post from "@/components/post/Post";
import connectDB from "@/lib/database";
import { cache } from "react";

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

const getPosts = cache(async () => {
  const db = (await connectDB).db("forum");
  const posts: Post[] = await db
    .collection("posts")
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  return posts;
});

export const revalidate = 10;

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className=" mx-8 h-max w-full max-w-2xl pt-4 md:mx-0">
      <h1 className="mb-6 text-3xl font-semibold text-zinc-800">글 목록</h1>
      <div className="grid grid-cols-3 gap-2.5">
        <div className="col-span-3 min-h-[12rem]">
          <div className="flex flex-col gap-3.5">
            {posts.map((post: Post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
