const { MongoClient, ObjectId } = require("mongodb")
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
    // console.log(dbName)
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}


async function populateCats() {
    /* Data Structure - Cats
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
    const costFood = 1.4
    const costSand = 1.5
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_CATS)
    await collection.insertMany([
        {
            name: "Malaquias",
            age: 6,
            race: "Persian",
            weight: 3,
            dewormer: new Date(),
            costs: [costFood, costSand]
        },
        {
            name: "Bondi",
            age: 3,
            race: "Siamese",
            weight: 2,
            dewormer: new Date(),
            costs: [costFood, costSand]
        },
        {
            name: "Malaquias Jr",
            age: 1,
            race: "Scottish Fold",
            weight: 1,
            dewormer: new Date(),
            costs: [costFood, costSand]
        },
        {
            name: "Goducho",
            age: 7,
            race: "Siberian",
            weight: 4,
            dewormer: new Date(),
            costs: [costFood, costSand]
        },
        {
            name: "Mizuki",
            age: 8,
            race: "Bengal cat",
            weight: 2,
            dewormer: new Date(),
            costs: [costFood, costSand]
        },
    ])
}

async function populateResources() {
    /* Data Structure - Resources
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
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_RESOURCES)
    await collection.insertOne({
        food: 2,
        sand: 2,
        cleaningSupplies: [
            50, //Bleach
            50, //Detergent
            25, //Vaccines
            100 //Dewormer
        ],
        capital: 1000,
        maxStockFood: 500,
        maxStockSand: 500,
        maxStockCleaningSupplies: 200
    })
}

populateCats()
    .then(() => console.log("Cats has been populated"))
    .catch((err) => console.log(err))

populateResources()
    .then(() => console.log("Resources has been populated"))
    .catch((err) => console.log(err))
