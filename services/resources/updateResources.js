import { findAllResources } from "../../data/resources";

export async function getResources() {
    return await findAllResources()
}