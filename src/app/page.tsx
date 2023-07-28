import Post from '@/components/Post';

export default async function Page() {
  const { postsList } = await (
    await fetch(process.env.URL + '/api/post/getAll', { cache: 'no-store' })
  ).json();

  return (
    <div>
      {postsList.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
