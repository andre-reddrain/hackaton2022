const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_CATS, getMongoCollection } = require("./db")

/* Data Structure
_id : ObjectId
name : String
age : Int
race : String
weight : Number
costs: [
    0 : food
    1 : water
    2 : sand
]
dewormer : Date
*/

async function createCat(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CATS)
    const result = await collection.insertOne(data)
    return result.insertedId
}

async function getAllCats() {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_CATS)
    return await collection.find().toArray()
}

async function deleteCat(id) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_CATS)
    return await collection.deleteOne({ _id: ObjectId(id) })
}

module.exports = {
    createCat,
    getAllCats,
    deleteCat
}