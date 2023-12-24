"use client";

import uid from "@/lib/uid";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import EditorJsRenderer from "@/components/post/EditorJsRenderer";
import CoolButton from "@/components/ui/CoolButton";
import { useRouter } from "next/navigation";

const EditorBlock = dynamic(() => import("@/components/post/Editor"), {
  ssr: false,
});

export default function Write() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setData] = useState<OutputData>();

  const router = useRouter();
  const { data: session } = useSession();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
    }
  };

  const onClick = async () => {
    const postId = uid();
    const authorId = session?.user?._id;

    const formData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, data, authorId }),
    };
    await fetch(`/api/posts/${postId}`, formData);
    alert("저장되었습니다.");
    router.refresh();
    router.push("/");
  };

  return (
    <div className="mb-10 flex justify-center max-md:w-full">
      <div className="mt-4 flex w-full flex-col gap-3 px-6 md:px-52">
        <h1 className="mb-3 text-3xl font-bold">글쓰기</h1>
        <div className="mb-10 flex justify-center rounded bg-white px-4 pt-10 shadow">
          <div className="mx-16 flex flex-col  md:w-[522.81px]">
            <div className="mb-2 w-fit">
              <input
                className="text-2xl font-extrabold focus:outline-none"
                name="title"
                value={title}
                onChange={onChange}
                placeholder="제목"
              />
            </div>
            <div className="mb-3 w-fit">
              <input
                className="font-md text-sm underline focus:outline-none"
                name="author"
                value={author}
                onChange={onChange}
                placeholder="작성자"
              />
            </div>
            <div className="editor-cotainer typography flex justify-center">
              <EditorBlock
                data={data}
                onChange={setData}
                holder="editorjs-container"
              />
            </div>
          </div>
        </div>
        {data && title !== "" && author !== "" && (
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="mb-3 text-3xl font-bold">미리보기</h1>
              <div className="mb-10 flex min-h-[12rem] justify-center rounded bg-white pb-8 pt-10 font-medium shadow">
                <div className="w-full max-w-2xl px-8">
                  <EditorJsRenderer data={data} title={title} preview={true} />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <CoolButton onClick={onClick}>저장</CoolButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
