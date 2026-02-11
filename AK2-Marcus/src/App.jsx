import './App.css'
import './components/AddForm.jsx'
import AddForm from './components/AddForm.jsx'
import ShoppingList from './components/ShoppingList.jsx'
import './style/stylesheet.css'
import { useState } from 'react'

function App() {

  const handleListe = [
    {
      id: 0,
      itemName: "Eple",
      bought: false,
      count: 2
    },
    {
      id: 1,
      itemName: "Banan",
      bought: true,
      count: 1
    }
  ]

   const [handleList, setHandleListe] = useState(handleListe)
   const [handle, setHandel] = useState({itemName: "", count: 0})
   const [errorMsg, setErrorMsg] = useState("")

  return (
    <>

      <header><h1>Handleliste AK2</h1></header>
      <main>
        <section id="Handleliste-Container">
          <h2>Handleliste</h2>
          <AddForm handle={handle} setHandel={setHandel} setHandleListe={setHandleListe} errorMsg={errorMsg} setErrorMsg={setErrorMsg}/>
          <ShoppingList handleListe={handleList} setHandleListe={setHandleListe}/>
        </section>
      </main>
      <footer><p>Marcus</p></footer>
    
    </>
  )
}

export default App
