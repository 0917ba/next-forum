'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Write() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'author':
        setAuthor(e.target.value);
        break;
      case 'content':
        setContent(e.target.value);
        break;
    }
  };

  const onClick = async () => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, content }),
    };
    await fetch('/api/post/new', data);
    router.refresh();
    router.push('/');
  };

  return (
    <div>
      <h4>글쓰기</h4>
      <input
        name='title'
        placeholder='제목'
        value={title}
        onChange={onChange}
      />
      <input
        name='author'
        placeholder='작성자'
        value={author}
        onChange={onChange}
      />
      <input
        name='content'
        placeholder='내용'
        value={content}
        onChange={onChange}
      />
      <button onClick={onClick}>제출</button>
    </div>
  );
}
