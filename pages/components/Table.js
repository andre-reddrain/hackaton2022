
// // import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import {useState} from "react"
import {useEffect} from "react"

export default function Table(props) {
    // const [showTable, setShowTable] = useState(false)

    useEffect(() => {
        async function CallBack() {

          const res = await fetch(
            `../../api/cats/getCats`, {
            method: "GET"
          })
          console.log(res)
          const json = await res.json()
          console.log(json)
          props.setGatos(json)
          //props.setGatos(temp)
          console.log("Fim do UseEffect")
        }
        CallBack()
      }, [])

  return (
    <div>
      <div>
        <fieldset>
        <label />Name
        <label />Age
        <label />Weight
        <label />Breed
        <label />Expenses
        </fieldset>
      </div>
     
      {
        props.gatos.map((e, i) => {
          return (
            <div key={i}>
              <fieldset>
              <span>{e.name}</span>
              <span> {e.age} years</span>
              <span> {e.weight} kg</span>
              <span> {e.breed}</span>
              </fieldset>
             
            </div>
          )
        })
      }

    </div>
  )}