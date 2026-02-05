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

  return (
    <>

      <header><h1>Handleliste AK2</h1></header>
      <main>
        <section id="Handleliste-Container">
          <h2>Handleliste</h2>
          <AddForm handle={handle} setHandel={setHandel} setHandleListe={setHandleListe}/>
          <ShoppingList handleListe={handleList} setHandleListe={setHandleListe}/>
        </section>
      </main>
      <footer><h3>Marcus</h3></footer>
    
      {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  )
}

export default App
