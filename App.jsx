import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>BIENVENIDOS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        Cerrar secion {count}
        </button>
        <p>
          Cerrar secion
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
