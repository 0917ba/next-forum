"use client";

import EditorJsRenderer from "@/components/post/EditorJsRenderer";
import CoolButton from "@/components/ui/CoolButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { OutputData } from "@editorjs/editorjs";

const EditorBlock = dynamic(() => import("@/components/post/Editor"), {
  ssr: false,
});

export default function Edit({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setData] = useState<OutputData>();

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const editingPost: any = await (
        await fetch("/api/post/get", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: params.id }),
        })
      ).json();
      setTitle(editingPost.title);
      setAuthor(editingPost.author);
      setData(editingPost.data);
    })();
  }, []);

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
    const formData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: params.id, title, author, data }),
    };
    await fetch("/api/post/update", formData);
    router.refresh();
    router.push("/");
  };

  return (
    <div className="mb-10 flex justify-center">
      <div className="mt-4 flex w-full flex-col gap-3 px-4 md:px-52">
        <h1 className="mb-3 text-3xl font-bold">글쓰기</h1>
        <div className="mb-10 flex flex-col rounded bg-white px-4 pt-10 font-medium shadow">
          <div className="mb-2 ml-16 md:ml-52">
            <input
              className="text-2xl font-extrabold focus:outline-none"
              name="title"
              value={title}
              onChange={onChange}
              placeholder="제목"
            />
          </div>
          <div className=" mb-3 ml-16 md:ml-52">
            <input
              className="font-md text-sm underline focus:outline-none"
              name="author"
              value={author}
              onChange={onChange}
              placeholder="작성자"
            />
          </div>
          <div className="mx-16">
            <EditorBlock
              data={data}
              onChange={setData}
              holder="editorjs-container"
            />
          </div>
        </div>
        {data && title && author && (
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="mb-3 text-3xl font-bold">미리보기</h1>
              <div className="mb-10 flex min-h-[12rem] justify-center rounded bg-white pb-5 font-medium shadow">
                <div className="min-w-[36rem] max-w-2xl md:min-w-[43rem]">
                  <EditorJsRenderer data={data} title={title} />
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
