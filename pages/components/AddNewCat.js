
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


    // const submit = async () => {
    //   const res = await fetch(
    //     '../../api/cards/createCard', {
    //     body: JSON.stringify(catInfo),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authenticate": localStorage.getItem("tokenG3")
    //     },
    //     method: "POST"
    //   })

    //   const json = await res.json()
  
    // }
  


  return (
     
    <div>
        <form onSubmit={(e) => {
          e.preventDefault(),
          props.setViewCatForm(false)
          // submit()
        }}>
            <fieldset>
            <label>Name</label><br />
            <input 
            type="text" 
            name="name" 
            placeholder="eg. Malaquias"
            onChange={(e) => setCatInfo({ ...catInfo, Name: e.target.value })}
            ></input><br/>


            <label>Age</label><br />
            <input 
            type="text" 
            name="name" 
            placeholder="eg. 6 years old" 
            onChange={(e) => setCatInfo({ ...catInfo, Age: e.target.value })}
            ></input><br/>


            <label>Race</label><br />
            <input 
            type="text" 
            name="name" 
            placeholder="eg. Maine Coon"
            onChange={(e) => setCatInfo({ ...catInfo, Race: e.target.value })}
            ></input><br/>


            <label>Weight</label><br />
            <input 
            type="text" 
            name="name" 
            placeholder="eg. 6kg"
            onChange={(e) => setCatInfo({ ...catInfo, Weight: e.target.value })}
            >
              </input><br />

    <input type="submit"></input>


            </fieldset>
        </form>



      </div>)}