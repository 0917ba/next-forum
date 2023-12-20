import { MongoClient } from "mongodb";
const mongoPassword = process.env.MONGO_PASSWORD as string;
const url = `mongodb+srv://09170917aa213:${mongoPassword}@cluster0.gemfinv.mongodb.net/?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true };
let connectDB: any;

if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  if (!global._mongo) {
    // @ts-ignore
    global._mongo = new MongoClient(url, options).connect();
  }
  // @ts-ignore
  connectDB = global._mongo;
} else {
  // @ts-ignore
  connectDB = new MongoClient(url, options).connect();
}
export default connectDB;
