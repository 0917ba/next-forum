import { OutputData } from "@editorjs/editorjs";
import Link from "next/link";

//use require since editorjs-html doesn't have types
const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();

type Props = {
  data: OutputData;
  title: string;
  preview?: boolean;
  id?: string;
};
type ParsedContent = string | JSX.Element;

const EditorJsRenderer = ({ data, title, id, preview = false }: Props) => {
  const html = EditorJsToHtml.parse(data) as ParsedContent[];

  return (
    <div className="editor-cotainer typography w-full">
      <div className="flex flex-col">
        {preview ? (
          <h1 className="mb-0.5 text-xl font-semibold">{title}</h1>
        ) : (
          <Link
            href={`/post/${id}`}
            className="mb-0.5 text-xl font-semibold no-underline"
          >
            {title}
          </Link>
        )}

        <div className="max-w-full" key={data.time}>
          {html.map((item, index) => {
            if (typeof item === "string") {
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: item }}
                  key={index}
                ></div>
              );
            }
            return item;
          })}
        </div>
      </div>
    </div>
  );
};

//  px-4 pt-10

export default EditorJsRenderer;
