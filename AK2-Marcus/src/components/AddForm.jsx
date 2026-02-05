export default function AddForm({handle, setHandel, setHandleListe}){
    
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
            alert("Feltet for vare kan ikke være tomt")
            return
        }

        if (handle.count <= 0 || !handle.count){
            alert("Antall kan ikke være tomt eller under 1")
            return
        } 

        setHandleListe((prev) => ([{id:uniqId, ...handle}, ...prev]))
        
    }

    return(
        <form onSubmit={leggTilVare}>
            <label htmlFor="Vare">Vare</label>
            <input type="text" name="itemName" id="Vare" placeholder="Banan" onChange={handleChange}/>
            <label htmlFor="Antall">Antall</label>
            <input type="number" name="count" id="Antall" onChange={handleChange}/>
            <button type="submit">Legg til vare</button>
        </form>            
    )
}