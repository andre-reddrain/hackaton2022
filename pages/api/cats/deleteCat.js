import { deleteCat } from "../../../services/cats/deleteCat"

export default async function deleteOneCat(req, res) {
    if (req.method === "DELETE") {
        //TODO REMOVE TEST
        let ans = await deleteCat("629f6e6429b0e642f3468227")
        console.log(ans)
        return res.status(200).json({ ans })
    }
}