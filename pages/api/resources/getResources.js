import { getResources } from "../../../services/resources/getResources"

export default async function getAllResources(req, res) {
    if (req.method === "GET") {
        let resources = await getResources()
        return res.status(200).send(resources[0])
    }
}
