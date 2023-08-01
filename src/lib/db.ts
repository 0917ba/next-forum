import { getFirestore } from "firebase/firestore";
import firebase_app from "./config";

const db = getFirestore(firebase_app);
export default db;
