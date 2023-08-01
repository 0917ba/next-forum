import { doc, setDoc } from "firebase/firestore";
import db from "../db";

export default async function updatePost(
  id: string,
  title: string,
  content: string,
  author: string,
) {
  await setDoc(doc(db, "posts", id), {
    title,
    content,
    author,
  });
}
