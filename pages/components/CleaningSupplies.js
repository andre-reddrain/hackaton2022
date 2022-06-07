import {useState} from "react"


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
            <fieldset>
            <label>Bleach</label><br />
            <p>{props.resources.cleaningSupplies.bleach}</p>


            <label>Detergent</label><br />
            <p>{props.resources.cleaningSupplies.detergent}</p>


            <label>Vaccines</label><br />
            <p>{props.resources.cleaningSupplies.vaccines}</p>


            <label>Dewormer</label><br />
            <p>{props.resources.cleaningSupplies.dewormer}</p>

            <button onClick={() => props.setViewCatForm(s => !s)}>Close</button>
            </fieldset>
           
        </form>



      </div>)}