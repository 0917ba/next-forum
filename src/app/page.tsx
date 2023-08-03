import Post from "@/components/post/Post";
import CoolLink from "@/components/ui/CoolLink";
import connectDB from "@/lib/database";

type Post = {
  _id: any;
  title: string;
  content: string;
  author: string;
  authorId: string;
};

export default async function Page() {
  const db = (await connectDB).db("forum");
  const posts = await db.collection("posts").find().toArray();

  return (
    <div className="mx-16 h-max pt-4 md:mx-60">
      <h1 className="mb-6 text-3xl font-semibold text-zinc-800">글 목록</h1>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-3 min-h-[12rem] md:col-span-2">
          <div className="flex flex-col gap-3.5">
            {posts.map((post: Post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        </div>
        <div className="col-span-1 hidden h-52 rounded-md bg-white shadow md:block">
          <CoolLink href="write">글쓰기</CoolLink>
        </div>
      </div>
    </div>
  );
}
