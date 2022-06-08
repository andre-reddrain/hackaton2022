
// // import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import {useState} from "react"
import { useEffect } from "react"
import styles from "../../styles/Home.module.css"
export default function Table(props) {
  // const [showTable, setShowTable] = useState(false)

  useEffect(() => {
    async function CallBack() {
      const res = await fetch(
        `../../api/cats/getCats`, {
        method: "GET"
      })
      const json = await res.json()
      props.setGatos(json)
    }
    CallBack()
  }, [])

  console.log(props.gatos)

  return (
    <div className={styles.formTable}>
      <div>
        <table style={{ border: 'none', width: '100%' }}>
          <tr>
            <th className={styles.formTableHead}>Name</th>
            <th className={styles.formTableHead}>Age</th>
            <th className={styles.formTableHead}>Weight</th>
            <th className={styles.formTableHead}>Breed</th>
            <th className={styles.formTableHead}>Expenses</th>
          </tr>



          {
            props.gatos.map((e, i) => {
              return (
                <tr key={i}>
                  <td >{e.name}</td>
                  <td> {e.age} years</td>
                  <td> {e.weight} kg</td>
                  <td> {e.breed}</td>
                  <td> -{e.costs[0]} kg / -{e.costs[1]} kg</td>
                </tr>

              )
            })
          }
        </table>
      </div>
    </div>
  )
}