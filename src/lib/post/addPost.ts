import db from '../config';
import { addDoc, collection } from 'firebase/firestore';

export default async function addPost(
  title: string,
  content: string,
  author: string
) {
  await addDoc(collection(db, 'posts'), {
    title,
    content,
    author,
  });
}
