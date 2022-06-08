import Head from 'next/head'
// import Image from 'next/image'
import stylesHome from "../../styles/Home.module.css"
import styles from '../../styles/Forms.module.css'
import { useState } from "react"

export default function AddResources(props) {
    const [resource, setResource] = useState({
        Food: 0,
        Sand: 0,
        Bleach: 0,
        Detergent: 0,
        Vaccines: 0,
        Dewormer: 0,
        Funds: 0
    })

    function handleSubmit(e) {
        e.preventDefault()
        props.setViewResourceForm(false)
        let food = Number(props.resources.food) + Number(resource.Food)
        let sand = Number(props.resources.sand) + Number(resource.Sand)
        let cleaningSupplies = {
            bleach: Number(props.resources.cleaningSupplies.bleach) + Number(resource.Bleach),
            detergent: Number(props.resources.cleaningSupplies.detergent) + Number(resource.Detergent),
            vaccines: Number(props.resources.cleaningSupplies.vaccines) + Number(resource.Vaccines),
            dewormer: Number(props.resources.cleaningSupplies.dewormer) + Number(resource.Dewormer)
        }

        updateResources(food, sand, cleaningSupplies)
    }

    async function updateResources(food, sand, cleaningSupplies) {
        const res = await fetch(`../../api/resources/updateResources`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                food: food,
                sand: sand,
                cleaningSupplies: cleaningSupplies
            })
        })
        const json = await res.json()
    }

    return (
        <div>
            <form
                // className={stylesHome.addResources}
                onSubmit={handleSubmit}>
                <fieldset
                    className={styles.resourcesForm}
                    style={{ border: 'none' }}>
                    <label>Add Food (kg)</label>
                    <input
                        type="number"
                        placeholder="eg. 6"
                        min="0"
                        onChange={(e) => setResource({ ...resource, Food: e.target.value })}>
                    </input> <span>{props.resources.food} / {props.resources.maxStockFood}</span><br />

                    <label>Add Sand (kg)</label>
                    <input
                        type="number"
                        placeholder="eg. 6"
                        min="0"
                        onChange={(e) => setResource({ ...resource, Sand: e.target.value })}>
                    </input> <span>{props.resources.sand} / {props.resources.maxStockSand}</span><br />

                    <label>Add Bleach (bottles)</label>
                    <input
                        type="number"
                        placeholder="eg. 6"
                        min="0"
                        onChange={(e) => setResource({ ...resource, Bleach: e.target.value })}>
                    </input> <span>{props.resources.cleaningSupplies.bleach} / {props.resources.maxStockCleaningSupplies}</span><br />

                    <label>Add Detergent (bottles)</label>
                    <input
                        type="number"
                        placeholder="eg. 6"
                        min="0"
                        onChange={(e) => setResource({ ...resource, Detergent: e.target.value })}>
                    </input> <span>{props.resources.cleaningSupplies.detergent} / {props.resources.maxStockCleaningSupplies}</span><br />

                    <label>Add Vaccines (quantity)</label>
                    <input
                        type="number"
                        placeholder="eg. 6"
                        min="0"
                        onChange={(e) => setResource({ ...resource, Vaccines: e.target.value })}>
                    </input> <span>{props.resources.cleaningSupplies.vaccines} / {props.resources.maxStockCleaningSupplies}</span><br />

                    <label>Add Dewormer (quantity)</label>
                    <input
                        type="number"
                        placeholder="eg. 6"
                        min="0"
                        onChange={(e) => setResource({ ...resource, Dewormer: e.target.value })}>
                    </input> <span>{props.resources.cleaningSupplies.dewormer} / {props.resources.maxStockCleaningSupplies}</span><br />

                    <label>Add Funds (€)</label>
                    <input
                        className={styles.input}
                        type="number"
                        placeholder="eg. 600"
                        min="0"
                        onChange={(e) => setResource({ ...resource, Funds: e.target.value })}>
                    </input><br />

                    <label>Donation</label>
                    <input type="checkbox"

                    // onChange={(e) => setResource({ ...resource, Dewormer: e.target.value })}
                    ></input><br />
                    <span>
                        <input
                            className={styles.buttonSubmit}
                            type="submit"
                            value="Submit">
                        </input>
                        <span>

                            <button
                                className={styles.buttonClose}
                                onClick={() => props.setViewResourceForm(e => !e)}>Close</button>
                        </span>
                    </span>
                </fieldset>
            </form>
        </div>
    )
}