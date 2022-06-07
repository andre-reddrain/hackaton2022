import { getCats } from "../../../services/cats/getCats"

export default async function getAllCats(req, res) {
    if (req.method === "GET") {
        let ans = await getCats()
        console.log(ans)
        // let ans = { name: "Get all cats!" }
        return res.status(200).json({ ans })
    }
}
