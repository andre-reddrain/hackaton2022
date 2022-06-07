import Head from 'next/head'
// import Image from 'next/image'
import {useState, useEffect} from "react"
// import { useRouter } from "next/router"
import AddNewCat from "./components/AddNewCat"
import AddResources from "./components/AddResources"
import Table from "./components/Table"
import CleaningSupplies from "./components/CleaningSupplies"
import Capital from './components/Capital'

import styles from "../styles/Home.module.css"

export default function Dashboard(props) {
    const [showTable, setShowTable] = useState(false)
    const [viewCatForm, setViewCatForm] = useState(false)
    const [viewResourceForm, setViewResourceForm] = useState(false)
    const [cleaningSupply, setCleaningSupply] = useState(false)
    const [addFundings, setAddFundings] = useState(false)
    const [capital, setCapital] = useState(false)
    const [gatos, setGatos] = useState([])
    const [resources, setResources] = useState()

    useEffect(() => {
        async function CallBack() {
          const res = await fetch(
            `../../api/resources/getResources`, {
            method: "GET"
          })
          const json = await res.json()
          console.log(json)
          setResources(json)
        }
        CallBack()
      }, [])


  return (
    <div >
      <Head>
        <title>CATSTOCK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Flatcat.ico" />
      </Head>

      <div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>
          <div className={styles.resourceContainer}>
            <div className={styles.foodContainer}>
              <div className={styles.resourceFont}>1000kg</div>
              <div className={styles.resourceTitle}>Food</div>
              <div className={styles.resourceInfo}>Comsumption expectance</div>
              <div className={styles.resourceDate}>2 Weeks</div>
            </div>
            <div className={styles.sandContainer}>
            <div className={styles.resourceFont}>1000kg</div>
              <div className={styles.resourceTitle}>Sand</div>
              <div className={styles.resourceInfo}>Comsumption expectance</div>
              <div className={styles.resourceDate}>2 Weeks</div>
            </div>
             /*
             onClick={() => 
            setCleaningSupply(s => !s)}>CLEANING SUPPLY
            {cleaningSupply && <div>
                <CleaningSupplies 
                resources={resources}
                />
             */
            <div className={styles.cleanContainer}>
            <div className={styles.resourceFont}>1000kg</div>
              <div className={styles.resourceTitle}>Cleaning Supplies</div>
              <div className={styles.resourceInfo}>Comsumption expectance</div>
              <div className={styles.resourceDate}>2 Weeks</div>
            </div>
            <div className={styles.capitalContainer}>
            <div className={styles.resourceFont}>1000kg</div>
              <div className={styles.resourceTitle}>Capital</div>
              <div className={styles.resourceInfo}>Comsumption expectance</div>
              <div className={styles.resourceDate}>2 Weeks</div>
            </div>
            /*
            <button onClick={() => 
                setCapital(s => !s)}>
                    Add Fundings
                    
            </button>
            {capital && <div>
            <Capital />
            </div>}
            */
          </div>

          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div className={styles.divButton}>
            <button className={styles.button}
              onClick={() => setShowTable(s => !s)}>{showTable ? "Hide Table" : "Show Table"}
            </button>
            {showTable && <div>
              <Table
                gatos={gatos}
                setGatos={setGatos}
                setShowTable={setShowTable}
                showTable={showTable}
              />
            </div>}
            
            <button className={styles.button}
              onClick={() => setViewCatForm(s => !s)}>{viewCatForm ? "Go Back" : "Add New Cat"}</button>{viewCatForm && <div>
                <AddNewCat 
                  setGatos ={setGatos} 
                  viewCatForm ={viewCatForm}
                  setViewCatForm ={setViewCatForm}/>
              </div>}

            <button className={styles.button}
              onClick={() => setViewResourceForm(s => !s)}>{viewResourceForm ? "Go Back" : "Add Resources"}</button> {viewResourceForm && <div>
                <AddResources 
                  viewResourceForm ={viewResourceForm} 
                  setViewResourceForm ={setViewResourceForm}
                  resources={resources}/> }

          </div>
          <div className={styles.bottomDiv}>

          </div>
        </div>
      </div>
    </div>)
}

// Aqui vai ser o cabeçalho, meter os botoes add gato, add recursos, podes delete gatos e recursos? 