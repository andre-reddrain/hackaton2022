import { MongoClient, ObjectId } from "mongodb"
const { DATABASE_NAME, COLLECTION_CATS, getMongoCollection } = require("./db")

/* Data Structure
_id : ObjectId
name : String
age : Int
race : String
weight : Number
dewormer : Date (90-90 days)
costs: [
    0 : food
    1 : sand
]
*/

export async function insertCat(data) {
    console.log(data)
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_CATS)
    const result = await collection.insertOne(data)
    return result.insertedId
}

export async function findAllCats() {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_CATS)
    return await collection.find().toArray()
}

export async function removeCat(id) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_CATS)
    return await collection.deleteOne({ _id: ObjectId(id) })
}
