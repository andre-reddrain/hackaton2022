const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_RESOURCES, getMongoCollection } = require("./db")

/* Data Structure
_id : ObjectId
food : Number
water : Number
sand : Number
costs : Number
maxStockFood : Number
maxStockSand : Number
*/

async function getResources() {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_RESOURCES)
    return await collection.find().toArray()
}

async function updateResource(id, data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_RESOURCES)
    const result = await collection.updateOne({ _id: ObjectId(id) }, { $set: data })
    return result.upsertedId
}

module.exports = {
    getResources,
    updateResource
}