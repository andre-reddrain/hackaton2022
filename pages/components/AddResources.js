import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {useState} from "react"

export default function AddResources(props) {
    const [resource, setResource] = useState({
        Food: "number",
        Sand: "number",
        Bleach: "number (litros)",
        Detergent: "number (litros)",
        Dewormer: "number"
        
        })


        // const submit = async () => {

        //     const res = await fetch(
        //       '../../api/cards/createCard', {
        //       body: JSON.stringify(resource),
        //       headers: {
        //         "Content-Type": "application/json",
        //         "Authenticate": localStorage.getItem("tokenG3")
        //       },
        //       method: "POST"
        //     })

        //     const json = await res.json()

        //   }
        


  return (
   
    <div>
        <form onSubmit={(e) => {
            e.preventDefault(),
            props.setViewResourceForm(false)
            // submit()
        }}>
        <fieldset>
        <label>Add Food in Kg</label><br />
            <input 
            type="text" 
            name="name" 
            placeholder="eg. 6"
            onChange={(e) => 
            setResource({ ...resource, Food: e.target.value })}></input><br/>


        <label>Add Sand in Kg</label><br />
            <input 
            type="text" 
            placeholder="eg. 6"
            onChange={(e) => setResource({ ...resource, Sand: e.target.value })}></input><br />

        <label>Add Bleach in Lt.</label><br />
            <input 
            type="text" 
            placeholder="eg. 6"
            onChange={(e) => setResource({ ...resource, Bleach: e.target.value })}></input><br />

        <label>Add Detergent in Lt.</label><br />
            <input 
            type="text" 
            placeholder="eg. 6"
            onChange={(e) => setResource({ ...resource, Detergent: e.target.value })}></input><br />

        <label>Add Dewormer</label><br />
            <input 
            type="text" 
            placeholder="eg. 6"
            onChange={(e) => setResource({ ...resource, Dewormer: e.target.value })}></input><br />

        <input type="submit"></input>

            </fieldset>
        </form>
    </div>
)}