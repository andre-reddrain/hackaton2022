import { removeCat } from "../../data/cats";

export async function deleteCat(id) {
    return await removeCat(id)
}