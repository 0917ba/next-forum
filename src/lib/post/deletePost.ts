import connectDB from "../database";

export default async function deletePost(_id: string) {
  const db = (await connectDB).db("forum");
  await db.collection("posts").deleteOne({ _id });
}
