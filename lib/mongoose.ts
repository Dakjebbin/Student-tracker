import mongoose from "mongoose"

const MONGODB_URL: string = process.env.MONGO_STRING || ""

if (!MONGODB_URL) throw new Error ("Please db String required")

let cached= (global as any)._mongoose;

if (!cached) {
    cached = (global as any)._mongoose = {conn: null, promise: null}
}

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if(!cached.promise) {
        const opts = {
            bufferCommands: false
        }

        cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => mongoose)
    }
    cached.conn = await cached.promise;
  return cached.conn;
}