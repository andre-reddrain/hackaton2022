import { MongoClient, ObjectId } from "mongodb"
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"

const DATABASE_NAME = "hack306"
const COLLECTION_CATS = "cats"
const COLLECTION_RESOURCES = "resources"
/**
 * Connection to the MongoDB Database
 * @returns Connection to the database
 */
async function connectToMongo() {
    try {
        return await MongoClient.connect(URL)
    } catch (errors) {
        console.log(errors)
    }
}

/**
 * Collects a collection from the database
 * @param {*} dbName Name of the Database 
 * @param {*} collectionName Name of the collection
 * @returns Collection
 */
async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return await client.db(dbName).collection(collectionName)
}

module.exports = {
    DATABASE_NAME,
    COLLECTION_CATS,
    COLLECTION_RESOURCES,
    connectToMongo,
    getMongoCollection
}