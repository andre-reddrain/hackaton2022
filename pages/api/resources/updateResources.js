import { updateResources } from "../../../services/resources/updateResources"
import { getResources } from "../../../services/resources/getResources"

export default async function getAllResources(req, res) {
    if (req.method === "PATCH") {
        let resources = await getResources()

        let update = await updateResources(resources[0]._id, req.body)
        return res.status(200).send(resources[0])
    }
}
