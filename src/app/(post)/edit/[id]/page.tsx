"use client";

import EditorJsRenderer from "@/components/post/EditorJsRenderer";
import CoolButton from "@/components/ui/CoolButton";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { OutputData } from "@editorjs/editorjs";

export default function Edit({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setData] = useState<OutputData>();
  const [Component, setComponent] = useState<any>(null);

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
      const Editor = React.lazy(() => import("@/components/post/Editor"));
      setComponent(React.lazy(() => import("@/components/post/Editor")));
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
        <div className="mb-10 flex justify-center rounded bg-white px-4 pt-10 shadow">
          <div className="mx-16 flex w-fit flex-col">
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
            {Component && (
              <div className="editor-cotainer typography flex justify-center">
                <Component
                  data={data}
                  onChange={setData}
                  holder="editorjs-container"
                />
              </div>
            )}
          </div>
        </div>
        {data && title !== "" && author !== "" && (
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="mb-3 text-3xl font-bold">미리보기</h1>
              <div className="mb-10 flex min-h-[12rem] justify-center rounded bg-white pb-8 pt-10 font-medium shadow">
                <div className="w-fit max-w-2xl">
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
