import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({handleListe, setHandleListe}){
    return(
        handleListe.map((item) => <ShoppingItem key={item.id} id={item.id} itemName={item.itemName} bought={item.bought} count={item.count} setHandleListe={setHandleListe}/>)
    )
}