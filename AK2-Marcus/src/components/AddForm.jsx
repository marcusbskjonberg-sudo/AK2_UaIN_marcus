export default function AddForm({handle, setHandel, setHandleListe, errorMsg, setErrorMsg}){
    
    const handleChange = (e) => {

        const {name, value} = e.target
        console.log(`${e.target.name}: ${e.target.value}`)

        setHandel((prev) => ({
            ...prev,
            [name]: value
        }))
        }

    const leggTilVare = (e) => {
        e.preventDefault()
        const uniqId = crypto.randomUUID()

        if (!handle.itemName){
            console.log("Feil: tomt itemName")
            setErrorMsg("Feltet for vare kan ikke være tomt")
            return
        }

        if (!handle.count){
            console.log("Feil: tomt count")
            setErrorMsg("Feltet for antall kan ikke være tomt")
            return
        } 
        if (handle.count <= 0){
            console.log("Feil: antall under 1")
            setErrorMsg("Antall må være minst 1")
            return
        } 

        setHandleListe((prev) => ([{id:uniqId, ...handle}, ...prev]))
        setErrorMsg("")
        
    }

    return(
        <form onSubmit={leggTilVare}>
            <p id="Error-Msg">{errorMsg}</p>
            <label htmlFor="Vare">Vare</label>
            <input type="text" name="itemName" id="Vare" placeholder="Banan" onChange={handleChange}/>
            <label htmlFor="Antall">Antall</label>
            <input type="number" name="count" id="Antall" onChange={handleChange}/>
            <button type="submit">Legg til vare</button>
        </form>            
    )
}