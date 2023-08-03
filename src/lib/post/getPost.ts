import connectDB from "../database";

export default async function getPost(_id: string) {
  const db = (await connectDB).db("forum");
  const result = await db.collection("posts").findOne({ _id });
  return result;
}
