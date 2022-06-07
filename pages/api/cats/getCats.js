import { getCats } from "../../../services/cats/getCats"

export default async function getAllCats(req, res) {
    if (req.method === "GET") {
        let gatos = await getCats()
        console.log(gatos)
        return res.status(200).send(gatos)
    }
}
