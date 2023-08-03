import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import Delimiter from "@editorjs/delimiter";

const EDITOR_TOOLS = {
  code: Code,
  header: {
    class: Header,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  quote: Quote,
  marker: Marker,
  list: {
    class: List,
    inlineToolbar: true,
  },
  image: SimpleImage,
  delimiter: Delimiter,
};
export default EDITOR_TOOLS;
