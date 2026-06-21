import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export interface CommentData {
  id: string;
  sender: string;
  text: string;
  createdAt: Date;
}

export async function getComments(movieId: string): Promise<CommentData[]> {
  const q = query(
    collection(db, "comments", movieId, "entries"),
    orderBy("createdAt", "desc"),
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    sender: doc.data().sender as string,
    text: doc.data().text as string,
    createdAt: (doc.data().createdAt as Timestamp)?.toDate() ?? new Date(),
  }));
}

export async function addComment(
  movieId: string,
  sender: string,
  text: string,
): Promise<void> {
  await addDoc(collection(db, "comments", movieId, "entries"), {
    sender,
    text,
    createdAt: serverTimestamp(),
  });
}
