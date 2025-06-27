import clientPromise from "@/app/lib/mongodb"

export async function GET(request) {
  
  const body = await request
  const client = await clientPromise;
  const db = client.db('bitlinks');
  const collection = db.collection("url")

  const result = await collection.find({}).toArray()

  return Response.json(result)
}