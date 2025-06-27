import clientPromise from "@/app/lib/mongodb"

export async function POST(request) {
  const body = await request.json()
  const clint = await clientPromise;
  const db = clint.db("bitlinks")
  const collection = db.collection('url')

  const doc = await collection.findOne( {$or : [ { shorturl: body.shorturl }, { id: body.id } ]})
  console.log(doc)
  if (doc) {
    return Response.json({ success: false, error: true, message: 'URL Already exists' })
  }

  await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
    id: body.id
  })

  return Response.json({ success: true, error: false, message: 'URL Generated Successfully' })

}