import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {useState} from "react"

export default function AddResources() {
    const [resource, setResource] = useState({
        Food: "number",
        Sand: "number",
        Bleach: "number (litros)",
        Detergent: "number (litros)",
        Dewormer: "number"
        
        })
  return (
    <div >
      <Head>
        <title>CatStash</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
        <form onSubmit={(e) => {
            e.preventDefault()
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


      </div>)}