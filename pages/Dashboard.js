import Head from 'next/head'
// import Image from 'next/image'
import { useState, useEffect } from "react"
// import { useRouter } from "next/router"
import AddNewCat from "./components/AddNewCat"
import AddResources from "./components/AddResources"
import Table from "./components/Table"
import CleaningSupplies from "./components/CleaningSupplies"


import styles from "../styles/Home.module.css"

export default function Dashboard(props) {
  const [showTable, setShowTable] = useState(false)
  const [viewCatForm, setViewCatForm] = useState(false)
  const [viewResourceForm, setViewResourceForm] = useState(false)
  const [cleaningSupply, setCleaningSupply] = useState(false)
  const [addFundings, setAddFundings] = useState(false)
  const [capital, setCapital] = useState(false)
  const [gatos, setGatos] = useState([])
  const [resources, setResources] = useState([])

  useEffect(() => {
    async function CallBack() {
      const res = await fetch(
        `../../api/resources/getResources`, {
        method: "GET"
      })
      const json = await res.json()
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
              <div className={styles.resourceFont} style={{ color: (resources.food < (resources.maxStockFood / 2) || resources.food > resources.maxStockFood) ? "red" : "black" }}>{resources.food}kg</div>
              <div className={styles.resourceTitle}>Food</div>
              <div className={styles.resourceInfo} style={{ marginLeft: "40px" }}>Consumption expectance</div>
              <div className={styles.resourceDate}>2 Weeks</div>
            </div>
            <div className={styles.sandContainer}>
              <div className={styles.resourceFont} style={{ color: (resources.sand < (resources.maxStockSand / 2) || resources.sand > resources.maxStockSand) ? "red" : "black" }}>{resources.sand}kg</div>
              <div className={styles.resourceTitle}>Sand</div>
              <div className={styles.resourceInfo} style={{ marginLeft: "40px" }}>Consumption expectance</div>
              <div className={styles.resourceDate}>2 Weeks</div>
            </div>

            {/* TODO Fix Cleaning Supplies Menu onClick */}

            <div className={styles.cleanContainer}
              onClick={() => setCleaningSupply(s => !s)}>
              {cleaningSupply ? <div>
                <CleaningSupplies
                  resources={resources}
                />
              </div> : <div>
                {/* <div className={styles.resourceFont}> Replace</div> */}
                <div className={styles.cleaningTitle}>Other Supplies</div>
                <div className={styles.cleaningInfo} style={{ marginLeft: "40px" }}>Consumption expectance</div>
                <div className={styles.cleaningDate}>2 Weeks</div>
              </div>}

            </div>
            <div className={styles.capitalContainer}>
              <div className={styles.resourceFont}>
                {resources.capital}€</div>
              <div className={styles.resourceTitle}>Capital</div>
              <div className={styles.resourceInfo} style={{ marginLeft: "5px" }}>Consumption expectance</div>
              <div className={styles.resourceDate}>2 Weeks</div>
            </div>
          </div>

          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div className={styles.divButton}>
            <button className={styles.button}
              onClick={() => setShowTable(s => !s)}>Show CatStock
            </button>
            {showTable && <div>
              <Table
                className={styles.Formtable}
                gatos={gatos}
                setGatos={setGatos}
                setShowTable={setShowTable}
                showTable={showTable}
              />
            </div>}

            <button className={styles.button}
              onClick={() => setViewCatForm(s => !s)}>Add Cat to Stock</button>{viewCatForm && <div>
                <AddNewCat
                  setGatos={setGatos}
                  viewCatForm={viewCatForm}
                  setViewCatForm={setViewCatForm} />
              </div>}

            <button className={styles.button}
              onClick={() => setViewResourceForm(s => !s)}>Add Resources</button>
            {viewResourceForm && <div>
              <AddResources
                viewResourceForm={viewResourceForm}
                setViewResourceForm={setViewResourceForm}
                resources={resources} />
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}