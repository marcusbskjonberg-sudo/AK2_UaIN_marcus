export default function ShoppingItem({id, itemName, bought, count, setHandleListe}){

    //For å sikre at antallet på en vare i handlelisten ikke kan være 0 eller lavere så valgte jeg å fjerne varen fra listen om antallet er 0 eller et negativt tall.
    const valueCheck = (e) => {
        const currentValue = e.target.value
        console.log(currentValue)
        if(currentValue <= 0){
        setHandleListe((prev) => prev.filter(item => item.id !== id))
        }
    }

    return(
        <article>
            <input type="checkbox" name="Checkbox" id="checkbox" defaultChecked = {bought}/>
            <h3>{itemName}</h3>
            <input className="number-input" type="number" defaultValue={count} onChange={valueCheck}/>
        </article>
        
    )
}