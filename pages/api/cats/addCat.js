import { createCat } from "../../../services/cats/addCat"

export default async function createOneCat(req, res) {
    if (req.method === "POST") {
        //TODO REMOVE TEST -> Replace with Body & Validations!
        let testCreate = {
            name: "XPTO",
            age: 2,
            race: "Persa",
            weight: 10,
            dewormer: new Date(),
            costs: [
                2,
                1
            ]
        }
        let ans = await createCat(testCreate)
        console.log(ans)
        return res.status(200).json({ ans })
    }
}