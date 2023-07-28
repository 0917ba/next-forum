import { doc, getDoc } from 'firebase/firestore';
import db from '../config';

export default async function getPost(id: string) {
  const docRef = doc(db, 'posts', id);
  const editingPost = await getDoc(docRef);
  return editingPost.data();
}
