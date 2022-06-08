import { patchResource } from "../../data/resources";

export async function updateResources(id, data) {
    return await patchResource(id, data)
}