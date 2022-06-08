// import styles from '../styles/Home.module.css'
import {useState} from "react"

export default function AddNewCat(props) {
    const [catInfo, setCatInfo] = useState({
        Name: "",
        Age: 0,
        Breed: "",
        Weight: 0,
        desparazitante: "",
        gastos : {
            comida: "",
            agua: "",
            areia: "",
            desparazitante: ""
        }
    })

    console.log(props)

    function handleSubmit(e) {
      e.preventDefault()

      let gato = {
        name: catInfo.Name,
        age: catInfo.Age,
        breed: catInfo.Breed,
        Weight: catInfo.Weight
      }

      // props.setGatos({...props.gatos, gato})
      console.log({...props.gatos, gato})

      console.log(gato)

      props.setViewCatForm(false)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Name</label><br />
          <input 
            type="text" 
            name="name" 
            placeholder="eg. Malaquias"
            required
            onChange={(e) => setCatInfo({ ...catInfo, Name: e.target.value })}>
          </input><br/>

          <label>Age</label><br />
          <input 
            type="number"
            name="age"
            min="0"
            placeholder="eg. 4" 
            required
            onChange={(e) => setCatInfo({ ...catInfo, Age: e.target.value })}>
          </input><br/>

          <label>Race</label><br />
          <input 
            type="text" 
            name="race" 
            required
            placeholder="eg. Maine Coon"
            onChange={(e) => setCatInfo({ ...catInfo, Race: e.target.value })}>
          </input><br/>

          <label>Weight</label><br />
          <input 
            type="text" 
            name="weight" 
            required
            placeholder="eg. 6kg"
            onChange={(e) => setCatInfo({ ...catInfo, Weight: e.target.value })}>
          </input><br />

          <input type="submit"></input>
        </fieldset>
      </form>
    </div>
  )
}