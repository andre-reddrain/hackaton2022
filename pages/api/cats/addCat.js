import { createCat } from "../../../services/cats/addCat"

export default async function createOneCat(req, res) {
    if (req.method === "POST") {
        //TODO REMOVE TEST
        let ans = await createCat({ test: "TesteGato" })
        console.log(ans)
        return res.status(200).json({ ans })
    }
}