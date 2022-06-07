import { getResources } from "../../../services/resources/getResources"

export default async function getAllResources(req, res) {
    if (req.method === "GET") {
        let ans = await getResources()
        console.log(ans)
        // let ans = { name: "Get all cats!" }
        return res.status(200).json({ ans })
    }
}
