import { findAllCats } from "../../data/cats";

export async function getCats() {
    return await findAllCats()
}