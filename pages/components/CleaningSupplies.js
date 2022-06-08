import {useState} from "react"
import styles from "../../styles/Forms.module.css"

export default function CleaningSupplies(props) {
    const [supplies, setSupplies] = useState({
            Bleach: "",
            Detergent: "",
            Vaccines: "",
            Dewormer: ""
    })

  return (
     
    <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          // props.setViewCatForm(false)
          // submit()
        }}>
            <fieldset 
            className={styles.stockInfo}>
            <h2>Bleach</h2>
            <h3>{props.resources.cleaningSupplies.bleach}</h3>


            <h2>Detergent</h2>
            <h3>{props.resources.cleaningSupplies.detergent}</h3>


            <h2>Vaccines</h2>
            <h3>{props.resources.cleaningSupplies.vaccines}</h3>


            <h2>Dewormer</h2>
            <h3>{props.resources.cleaningSupplies.dewormer}</h3>

            <button onClick={() => props.setViewCatForm(s => !s)}>Close</button>
            </fieldset>
           
        </form>



      </div>)}