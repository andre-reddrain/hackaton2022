import { updateResources } from "../../../services/resources/updateResources"

export default async function getAllResources(req, res) {
    if (req.method === "GET") {
        let resources = await getResources()
        console.log(resources)
        return res.status(200).send(resources[0])
    }
}
