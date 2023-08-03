import { OutputData } from "@editorjs/editorjs";

//use require since editorjs-html doesn't have types
const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();

type Props = {
  data: OutputData;
  title: string;
};
type ParsedContent = string | JSX.Element;

const EditorJsRenderer = ({ data, title }: Props) => {
  const html = EditorJsToHtml.parse(data) as ParsedContent[];
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="prose max-w-full" key={data.time}>
        {html.map((item, index) => {
          if (typeof item === "string") {
            return (
              <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
            );
          }
          return item;
        })}
      </div>
    </div>
  );
};

//  px-4 pt-10

export default EditorJsRenderer;
