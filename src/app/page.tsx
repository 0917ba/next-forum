import Post from "@/components/Post";

export default async function Page() {
  const { postsList } = await (
    await fetch(process.env.URL + "/api/post/getAll", { cache: "no-store" })
  ).json();

  return (
    <div className="mx-16 h-max pt-4 md:mx-40">
      <h1 className="mb-4 text-3xl font-semibold text-zinc-800">글 목록</h1>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 min-h-[12rem]">
          <div className="flex flex-col gap-3">
            {postsList.map((post: any) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-48 rounded-md bg-white shadow">
            글쓰기 혹은 로그인
          </div>
        </div>
      </div>
    </div>
  );
}
