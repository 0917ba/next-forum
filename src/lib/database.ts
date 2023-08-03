import { MongoClient } from "mongodb";
const mongoPassword = process.env.MONGO_PASSWORD as string;
const url = `mongodb+srv://09170917aa213:${mongoPassword}@cluster0.gemfinv.mongodb.net/?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true };
let connectDB: any;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export default connectDB;
