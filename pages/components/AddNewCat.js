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

    function handleSubmit(e) {
      e.preventDefault()

      //TODO AUTOMATIC REFRESH OF DASHBOARD STATE
      createCat(catInfo.Name, catInfo.Age, catInfo.Breed, catInfo.Weight)

      props.setViewCatForm(false)
    }

    async function createCat(name, age, breed, weight) {
      const costFood = 1.4
      const costSand = 1.5

      const isBaby = ((age) => {
        if (age <= 1) return true
        return false
      })

      const setCosts = ((isBaby) => {
        if (isBaby) return [costFood / 2, costSand / 2]
        return [costFood, costSand]
      })

      const res = await fetch(`../../api/cats/addCat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          age: age,
          breed: breed,
          weight: weight,
          dewormer: new Date(),
          costs: setCosts(isBaby(age))
        })
      })
      const json = await res.json()
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