import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {useState} from "react"
import styles from "../../styles/Home.module.css"

export default function AddResources(props) {
    const [resource, setResource] = useState({
        Food: 0,
        Sand: 0,
        Bleach: 0,
        Detergent: 0,
        Vaccines: 0,
        Dewormer: 0
    })

  return (
    <div >
        <form  className={styles.addResources}
            onSubmit={(e) => {
            e.preventDefault(),
            props.setViewResourceForm(false)
            console.log(`Food: ${props.resources.food} + ${resource.Food} = ${props.resources.food + resource.Food}`)
            console.log(`Sand: ${props.resources.sand} + ${resource.Sand} = ${props.resources.sand + resource.Sand}`)
            console.log(`Cleaning Supplies (Bleach): ${props.resources.cleaningSupplies.bleach} + ${resource.Bleach} = ${props.resources.cleaningSupplies.bleach + resource.Bleach}`)
            console.log(`Cleaning Supplies (Detergent): ${props.resources.cleaningSupplies.detergent} + ${resource.Detergent} = ${props.resources.cleaningSupplies.detergent + resource.Detergent}`)
            console.log(`Cleaning Supplies (Vaccines): ${props.resources.cleaningSupplies.vaccines} + ${resource.Vaccines} = ${props.resources.cleaningSupplies.vaccines + resource.Vaccines}`)
            console.log(`Cleaning Supplies (Dewormer): ${props.resources.cleaningSupplies.dewormer} + ${resource.Dewormer} = ${props.resources.cleaningSupplies.dewormer + resource.Dewormer}`)
        }}>
            <fieldset style={{border: 'none'}}>
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