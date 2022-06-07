import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {useState} from "react"

export default function AddNewCat(props) {
    const [catInfo, setCatInfo] = useState({
        Name: "string",
        Age: "number",
        Race: "string",
        Weight: "number",
        desparazitante: "data",
        gastos : {
            comida: "",
            agua: "",
            areia: "",
            desparazitante: ""
        }
    })
  return (
    <div >
      <Head>
        <title>CatStash</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <fieldset>
            <label>Name</label><br />
            <input 
            type="text" 
            name="name" 
            placeholder="eg. Malaquias"></input><br/>


            <label>Age</label><br />
            <input 
            type="text" 
            name="name" 
            placeholder="eg. 6 years old" ></input><br/>


            <label>Race</label><br />
            <input 
            type="text" 
            name="name" 
            placeholder="eg. Maine Coon"></input><br/>


            <label>Weight</label><br />
            <input 
            type="text" 
            name="name" 
            placeholder="eg. 6kg"></input><br />

    <input type="submit"></input>


            </fieldset>
        </form>
    </div>


      </div>)}