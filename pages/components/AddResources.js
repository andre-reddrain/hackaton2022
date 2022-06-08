import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {useState} from "react"

export default function AddResources(props) {
    const [resource, setResource] = useState({
        Food: 0,
        Sand: 0,
        Bleach: 0,
        Detergent: 0,
        Vaccines: 0,
        Dewormer: 0
    })

    function handleSubmit(e) {
        e.preventDefault(),
        props.setViewResourceForm(false)
        let food = Number(props.resources.food) + Number(resource.Food)
        let sand = Number(props.resources.sand) + Number(resource.Sand)
        let cleaningSupplies = {
            bleach: Number(props.resources.cleaningSupplies.bleach) + Number(resource.Bleach),
            detergent: Number(props.resources.cleaningSupplies.detergent) + Number(resource.Detergent),
            vaccines: Number(props.resources.cleaningSupplies.vaccines) + Number(resource.Vaccines),
            dewormer: Number(props.resources.cleaningSupplies.dewormer) + Number(resource.Dewormer)
        }
    }

    async function updateResources(food, sand, cleaningSupplies) {
        const res = await fetch(`../../api/cats/addCat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            age: age,
            breed: breed,
            weight: weight,
            dewormer: new Date(),
            costs: setCosts(isBaby(age))
          })
        })
        const json = await res.json()
      }

  return (
    <div>
        <form onSubmit={handleSubmit}
            
        >
            <fieldset>
                <label>Add Food (kg)</label><br />
                <input 
                    type="number" 
                    placeholder="eg. 6"
                    min="0"
                    onChange={(e) => setResource({ ...resource, Food: e.target.value })}>
                </input> <span>{props.resources.food} / {props.resources.maxStockFood}</span><br/>

                <label>Add Sand (kg)</label><br />
                <input 
                    type="number" 
                    placeholder="eg. 6"
                    min="0"
                    onChange={(e) => setResource({ ...resource, Sand: e.target.value })}>
                </input> <span>{props.resources.sand} / {props.resources.maxStockSand}</span><br />

                <label>Add Bleach (bottles)</label><br />
                <input 
                    type="number" 
                    placeholder="eg. 6"
                    min="0"
                    onChange={(e) => setResource({ ...resource, Bleach: e.target.value })}>
                </input> <span>{props.resources.cleaningSupplies.bleach} / {props.resources.maxStockCleaningSupplies}</span><br />

                <label>Add Detergent (bottles)</label><br />
                <input 
                    type="number" 
                    placeholder="eg. 6"
                    min="0"
                    onChange={(e) => setResource({ ...resource, Detergent: e.target.value })}>
                </input> <span>{props.resources.cleaningSupplies.detergent} / {props.resources.maxStockCleaningSupplies}</span><br />

                <label>Add Vaccines (quantity)</label><br />
                <input 
                    type="number" 
                    placeholder="eg. 6"
                    min="0"
                    onChange={(e) => setResource({ ...resource, Vaccines: e.target.value })}>
                </input> <span>{props.resources.cleaningSupplies.vaccines} / {props.resources.maxStockCleaningSupplies}</span><br />

                <label>Add Dewormer (quantity)</label><br />
                <input 
                    type="number" 
                    placeholder="eg. 6"
                    min="0"
                    onChange={(e) => setResource({ ...resource, Dewormer: e.target.value })}>
                </input> <span>{props.resources.cleaningSupplies.detergent} / {props.resources.maxStockCleaningSupplies}</span><br />

                <label>Donation</label>
                    <input type="checkbox"
                    
                    // onChange={(e) => setResource({ ...resource, Dewormer: e.target.value })}
                    ></input><br />

                <input type="submit"></input>
            </fieldset>
        </form>
    </div>
)}