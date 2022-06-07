import { ObjectId } from "mongodb"
const { DATABASE_NAME, COLLECTION_RESOURCES, getMongoCollection } = require("./db")

/* Data Structure
_id : ObjectId
food : Number
sand : Number
cleaningSupplies : [
    bleach : Number (50)
    detergent : Number (50)
    vaccines : Number (25)
    dewormer : Number (100)
]
capital : Number
maxStockFood : Number (500kg)
maxStockSand : Number (500kg)
maxStockCleaningSupplies : Number (200)
*/

export async function findAllResources() {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_RESOURCES)
    return await collection.find().toArray()
}

export async function updateResource(id, data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_RESOURCES)
    const result = await collection.updateOne({ _id: ObjectId(id) }, { $set: data })
    return result.upsertedId
}