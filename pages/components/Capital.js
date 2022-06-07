
export default function Capital(props) {
  


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
        <form 
        // onSubmit={(e) => {
        //   e.preventDefault()
        //   // props.setViewCatForm(false)
        //   // submit()
        // }}
        >
            <fieldset>
            <label>AVAILABLE CAPITAL</label><br />
            
           <input type="number"></input> 
            
            


            {/* <label>DONATIONS</label><br />
            <p>SERÁ?</p> */}


            

            <button onClick={() => props.setCapital(s => !s)}>Close</button>
            </fieldset>
           
        </form>



      </div>)}