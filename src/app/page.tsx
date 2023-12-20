import Post from "@/components/post/Post";
import connectDB from "@/lib/database";

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

export default async function Page() {
  const db = (await connectDB).db("forum");
  const posts = await db.collection("posts").find().toArray();
  posts.sort((a: Post, b: Post) => b.createdAt - a.createdAt)

  return (
    <div className="mx-20 h-max pt-4 lg:mx-52">
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
