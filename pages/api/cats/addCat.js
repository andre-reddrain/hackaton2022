import { createCat } from "../../../services/cats/addCat"

export default async function createOneCat(req, res) {
    if (req.method === "POST") {
        let ans = await createCat(req.body)
        return res.status(200).send(ans)
    }
}