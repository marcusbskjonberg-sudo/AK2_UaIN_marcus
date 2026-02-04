export default function AddForm({handle, setHandel, setHandleListe}){
    
    const handleChange = (e) => {

        const {name, value} = e.target
        console.log("change")

        setHandel((prev) => ({
            ...prev,
            [name]: value
        }))
        }

    const leggTilVare = (e) => {
        e.preventDefault()
        console.log(handle)
        const uniqId = crypto.randomUUID()
        setHandleListe((prev) => ([...prev, {id:uniqId, ...handle}]))
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