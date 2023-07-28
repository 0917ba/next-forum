'use client';

import { DocumentData } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function Post({ post }: { post: DocumentData }) {
  const router = useRouter();

  const { id, title, author, content } = post;
  const onEdit = () => {
    router.push(`/edit/${id}`);
  };

  const onDelete = async () => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    };
    await fetch('/api/post/delete', data);
    router.refresh();
    router.push('/');
  };

  return (
    <div>
      <button onClick={onDelete}>삭제</button>
      <button onClick={onEdit}>수정</button>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{content}</p>
    </div>
  );
}
