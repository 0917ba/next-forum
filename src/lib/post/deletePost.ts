import { deleteDoc, doc } from 'firebase/firestore';
import db from '../config';

export default async function deletePost(id: string) {
  await deleteDoc(doc(db, 'posts', id));
}
