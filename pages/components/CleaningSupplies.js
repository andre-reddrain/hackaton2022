import {useState} from "react"


export default function CleaningSupplies(props) {
    const [supplies, setSupplies] = useState({
            Bleach: "",
            Detergent: "",
            Vaccines: "",
            Dewormer: ""
    })


    // Fetch da base dados
    
    //const submit = async () => {
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
            <label>Bleach</label><br />
            <p>SERÁ?</p>


            <label>Detergent</label><br />
            <p>SERÁ?</p>


            <label>Vaccines</label><br />
            <p>SERÁ?</p>


            <label>Dewormer</label><br />
            <p>SERÁ?</p>

{/* <button onClick={}></button> */}
            </fieldset>
        </form>



      </div>)}