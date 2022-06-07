
// // import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import {useState} from "react"
import {useEffect} from "react"

export default function Table(props) {
    // const [showTable, setShowTable] = useState(false)

    useEffect(() => {
        async function CallBack() {
          let temp =  [
                { _id: ("629f7a2029b0e642f3468228"), test: 'TesteGato1' },
                { _id: ("629f7a2229b0e642f3468229"), test: 'TesteGato2' },
                { _id: ("629f7a2329b0e642f346822a"), test: 'TesteGato3' }
              ]
        //   const res = await fetch(
        //     `../../api/cats/getCats`, {
        //     method: "GET"
        //   })
        //   console.log(res)
        //   const json = await res.json()
        //   setGatos(json.ans)
        props.setGatos(temp)
          console.log("Fim do UseEffect")
        }
        CallBack()
      }, [])

    // let temp =  [
    //     { _id: ("629f7a2029b0e642f3468228"), test: 'TesteGato1' },
    //     { _id: ("629f7a2229b0e642f3468229"), test: 'TesteGato2' },
    //     { _id: ("629f7a2329b0e642f346822a"), test: 'TesteGato3' }
    //   ]

  return (
   
   <div>

       <div>
           <label />Name
           <label />Age
            <label />Weight
            <label />Breed
            <label />Expenses
        </div>
    
    
    
    <div>

    {

        props.gatos.map((e) => {
            console.log(e)
            return (
            <div>

                <p>{e.test}</p>
            </div>)
        })

    }

    </div>
   


   </div>
   
   
    )}