import { insertCat } from "../../data/cats";

export async function createCat(data) {
    return await insertCat(data)
}